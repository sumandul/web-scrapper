import React, { useState } from "react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-blue-400 hover:text-blue-300 text-sm"
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

const sentimentEmoji = {
  POSITIVE: "😊",
  NEGATIVE: "😞",
  NEUTRAL: "😐",
};

export default function ScraperResultDisplay({ jobResult }) {
  const [showFullSummary, setShowFullSummary] = useState(false);
  const [showTags, setShowTags] = useState(false);

  const summary = jobResult?.result?.summary || "-";
  const headline = jobResult?.result?.headline || "No Headline";
  const tldr = jobResult?.result?.tldr || null;
  const topics = jobResult?.result?.topics || [];
  const sentiment = jobResult?.result?.sentiment || null;
  const seoTags = jobResult?.result?.seo_tags || [];

  const isLongSummary = summary.length > 300;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-white space-y-6">
      {/* Headline with copy */}
      <div className="flex items-center">
        <h2 className="text-2xl font-bold text-blue-400">{headline}</h2>
        <CopyButton text={headline} />
      </div>

      {/* TL;DR */}
      {tldr && (
        <div>
          <strong className="text-blue-300">TL;DR:</strong> {tldr}
        </div>
      )}

      {/* Summary with smooth expand/collapse & copy */}
      <div>
        <strong className="text-blue-300">Summary:</strong>
        <p
          className="mt-1 text-sm text-gray-200 whitespace-pre-wrap transition-max-height duration-300 ease-in-out overflow-hidden"
          style={{
            maxHeight: showFullSummary ? "1000px" : "5.5rem",
          }}
          aria-expanded={showFullSummary}
        >
          {summary}
        </p>
        <div className="flex items-center gap-4 mt-2">
          {isLongSummary && (
            <button
              onClick={() => setShowFullSummary(!showFullSummary)}
              className="text-blue-400 text-sm underline hover:text-blue-300"
              aria-controls="summary"
              aria-expanded={showFullSummary}
              type="button"
            >
              {showFullSummary ? "Show Less" : "Show More"}
            </button>
          )}
          <CopyButton text={summary} />
        </div>
      </div>

      {/* Topics */}
      {topics.length > 0 && (
        <div>
          <strong className="text-blue-300">Topics:</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {topics.map((topic) => (
              <span
                key={topic}
                className="bg-blue-600 text-xs px-2 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Sentiment */}
      <div>
        <strong className="text-blue-300">Sentiment:</strong>{" "}
        {sentiment?.label ? (
          <span
            className={`px-2 py-1 rounded-full text-xs inline-flex items-center gap-1 ${
              sentiment.label === "POSITIVE"
                ? "bg-green-600"
                : sentiment.label === "NEGATIVE"
                ? "bg-red-600"
                : "bg-gray-600"
            }`}
          >
            <span aria-hidden="true">
              {sentimentEmoji[sentiment.label] || "❓"}
            </span>
            <span>
              {sentiment.label} ({sentiment.score.toFixed(2)})
            </span>
          </span>
        ) : (
          <span className="text-gray-400 text-xs">No sentiment data</span>
        )}
      </div>

      {/* SEO Tags collapsible */}
      {seoTags.length > 0 && (
        <div>
          <strong
            className="text-blue-300 cursor-pointer underline select-none"
            onClick={() => setShowTags(!showTags)}
            aria-expanded={showTags}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setShowTags(!showTags);
            }}
          >
            SEO Tags ({seoTags.length}) {showTags ? "▲" : "▼"}
          </strong>
          {showTags && (
            <div className="flex flex-wrap gap-2 mt-1" id="seo-tags-list">
              {seoTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-600 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
