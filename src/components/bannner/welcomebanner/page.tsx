"use client";
import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import ScraperResultDisplay from "@/components/ScraperResultDisplay/page";
import ChatBox from "../ChatBox/page";
import LoginModal from "../login/page";
import LoginButton from "../login/page";

// ✅ UI Components
const Input = ({ placeholder, value, onChange, className }: any) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full p-3 rounded-lg border border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${className}`}
  />
);

const Button = ({ children, onClick, disabled, className }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 ${className}`}
    type="button"
  >
    {children}
  </button>
);

const Card = ({ children, className }: any) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }: any) => (
  <div className={`space-y-4 ${className}`}>{children}</div>
);

// Simple URL validation
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// ✅ API Call
const createScrapeJob = async (url: string) => {
  const res = await fetch("/api/scrape/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, scraper_type: "beautifulsoup", tags: [] }),
  });
  if (!res.ok) throw new Error("Failed to start scraping job");
  return res.json();
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [jobResult, setJobResult] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mutation hook for starting scrape
  const { mutate: startScraping, isPending: isSubmitting } = useMutation({
    mutationFn: () => createScrapeJob(url),
    onSuccess: (data) => {
      const id = data.data.job_id;
      setJobId(id);
      setIsListening(true);
      setIsLoading(true);
      setJobResult(null); // clear old results on new job start
    },
    onError: (err: any) => {
      alert(err?.message || "Something went wrong");
    },
  });

  // SSE handler
  useEffect(() => {
    if (!jobId || !isListening) return;

    const source = new EventSource(`/api/scrape/stream/${jobId}`);

    source.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      const status = parsedData?.status;

      if (status === "completed") {
        setJobResult(parsedData);
        setIsListening(false);
        setIsLoading(false);
        source.close();
      } else if (status === "error") {
        setJobResult(parsedData);
        setIsListening(false);
        setIsLoading(false);
        source.close();
      } else {
        setJobResult(parsedData); // update progress info
      }
    };

    source.onerror = () => {
      source.close();
      setIsListening(false);
      setIsLoading(false);
    };

    return () => {
      source.close();
    };
  }, [jobId, isListening]);

  // Handle URL change + validation
  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUrl(val);
    if (val && !isValidUrl(val)) {
      setUrlError("Please enter a valid URL");
    } else {
      setUrlError("");
    }
  };

  // Clear all state to start fresh
  const clearAll = () => {
    setUrl("");
    setJobResult(null);
    setJobId(null);
    setIsListening(false);
    setIsLoading(false);
    setUrlError("");
  };

  return (
    <>
    
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-4 sm:px-8 md:px-16 ">
      <div className="flex items-center justify-end">
        <LoginButton />
      </div>
      <div className="flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto space-y-8">
        {/* 🔷 Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            🧠 AI Web Scraper
          </h1>
          <p className="mt-2 text-gray-300 text-lg sm:text-xl">
            Paste any article or website URL to extract content and generate
            AI-powered insights like summaries, sentiment, and SEO tags.
          </p>
        </div>

        {/* 📝 Input */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="https://example.com/article"
            value={url}
            onChange={onUrlChange}
            className="flex-grow"
          />
          <Button
            onClick={() => startScraping()}
            disabled={isSubmitting || !url || !!urlError}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Scraping...
              </span>
            ) : (
              "Start Scraping"
            )}
          </Button>
        </div>
        {urlError && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {urlError}
          </p>
        )}

        {/* Retry / Clear Buttons */}
        {(jobResult || jobId) && (
          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => startScraping()}
              disabled={isSubmitting || !url || !!urlError}
              className="sm:w-auto"
            >
              Retry
            </Button>
            <Button
              onClick={clearAll}
              className="bg-gray-600 hover:bg-gray-700 sm:w-auto"
            >
              Clear
            </Button>
          </div>
        )}

        {/* ⏳ Loading Spinner */}
        {isLoading && (
          <Card className="mt-8 text-center">
            <CardContent>
              <div className="flex flex-col items-center justify-center space-y-4">
                <svg
                  className="animate-spin h-8 w-8 text-blue-400"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                <p className="text-gray-300">Analyzing the content…</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 📊 Results */}
        {jobResult && !isLoading && (
  <>
    <ScraperResultDisplay jobResult={jobResult} />

    {/* 🗨️ AI ChatBox */}
    {jobId && (
      <ChatBox jobId={jobId} />
    )}
  </>
)}

        {jobResult && !isLoading && (
          <ScraperResultDisplay jobResult={jobResult} />
        )}
      </div>
      </div>
      
    </main>
    </>
  );
}
