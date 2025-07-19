// pages/study-process-uk.tsx
"use client";

import {
  NotebookPen,
  ScanLine,
  School,
  Send,
  TicketPercent,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Define props for the StepIcon component
interface StepIconProps {
  number: number;
}

// StepIcon Component
const StepIcon: React.FC<StepIconProps> = ({ number }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-GenZ-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
    {number}
  </div>
);

// Define the type for the study process steps
interface StudyStep {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode; // For Lucide icons
  image?: string; // For images (optional)
}

// Define the type for the sidebar links
interface SidebarLink {
  href: string;
  label: string;
  active?: boolean;
}

const StudyProcessUK: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Adjust speed of parallax effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define the study steps data
  const studySteps: StudyStep[] = [
    {
      step: 1,
      title: "Choose Your Course and Institution",
      description:
        "Research and select the course and education provider that best fits your career goals. Consider location, campus facilities, and support services for international students.",
      icon: <NotebookPen className="w-full h-full from-inherit" />,
    },
    {
      step: 2,
      title: "Check Entry Requirements",
      description:
        "Review the academic and English language requirements for your chosen course and institution. Prepare for and take any required English proficiency tests (IELTS, TOEFL, PTE, etc.).",
      icon: <ScanLine className="w-full h-full from-inherit" />,
    },
    {
      step: 3,
      title: "Apply to the Institution",
      description:
        "Submit your application directly to the Australian institution, either online or by post. Include all required documents such as transcripts, proof of English proficiency, and other supporting materials.",
      icon: <School className="w-full h-full from-inherit" />,
    },
    {
      step: 4,
      title: "Receive Your Offer and Confirmation of Enrolment (CoE)",
      description:
        "If accepted, you will receive a Letter of Offer. Once you accept and pay any required deposit, you will receive a Confirmation of Enrolment (CoE), which is required for your visa application.",
      icon: <TicketPercent className="w-full h-full from-inherit" />,
    },
    {
      step: 5,
      title: "Apply for Your Student Visa (Subclass 500)",
      description:
        "Apply online for your Australian student visa using your CoE. Prepare documents such as proof of funds, health insurance (OSHC), English proficiency, and meet health and character requirements.",
      image: "/step-5-prepare.jpg",
    },
    {
      step: 6,
      title: "Arrange Accommodation and Prepare for Departure",
      description:
        "Book your accommodation, purchase your flight tickets, and attend any pre-departure briefings. Make sure you have your OSHC, important documents, and are ready for your new life in Australia.",
      image: "/step-5-prepare.jpg",
    },
  ];

  // Define the sidebar links data
  const sidebarLinks: SidebarLink[] = [
    { href: "/study/aus", label: "Study in Australia" },
    { href: "/study/uk", label: "Study in UK", active: true },
    { href: "/study-process-canada", label: "Study in Canada" },
    { href: "/study/usa", label: "Study in USA" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Study Process for UK | GenZ Global  Education visa Service</title>
        <meta
          name="description"
          content="Learn about the step-by-step process to study in the Austrelia with  GenZ Global  Education visa Service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Background Image */}
      <section
        className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('/aus2.jpg')`,
          backgroundPosition: `center ${offset}px`,
        }}
      >
        <Image
          src="/aus2.jpg"
          alt="Study in the UK"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-[0.5] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Study in the{" "}
              <span className="text-GenZ-secondary shadow-inner">
                Australia
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-md mx-auto drop-shadow-md">
              Your journey to a world-class education starts here withGenZ Global  Education visa Service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Study Process Section */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Your Path to Studying in the{" "}
              <span className="text-GenZ-secondary">Australia</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              At GenZ Global  Education visa Service , we simplify the process of studying in the
              Australia. Follow these steps to start your journey to a
              world-class education.
            </p>

            {/* Step-by-Step Process with Cards and Images */}
            <div className="space-y-8">
              {studySteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Step Image/Icon */}
                  <div className="w-full text-GenZ-secondary sm:w-12 h-32 relative rounded-lg overflow-hidden">
                    {item.icon
                      ? item.icon
                      : item.image && (
                          <Image
                            src={item.image}
                            alt={`Step ${item.step}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        )}
                  </div>
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <StepIcon number={item.step} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <h3 className="bg-GenZ-secondary text-white text-lg font-semibold py-4 px-6">
                Abroad Study
              </h3>
              <ul className="py-4">
                {sidebarLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3 px-6 text-gray-700 font-medium ${
                        link.href === pathname
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-gray-100"
                      } transition-colors duration-200`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/request-callback"
              className="block text-white flex items-center justify-center gap-3 mt-6 bg-gradient-to-r bg-GenZ-secondary text-gray-800 text-center py-4 px-6 rounded-lg font-semibold shadow-md hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              Contact us <Send />
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default StudyProcessUK;
