// pages/study-process-canada.tsx
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

interface StepIconProps {
  number: number;
}

const StepIcon: React.FC<StepIconProps> = ({ number }) => (
  <div className="flex-shrink-0 w-12 h-12 bg-GenZ-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
    {number}
  </div>
);

interface StudyStep {
  step: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

interface SidebarLink {
  href: string;
  label: string;
  active?: boolean;
}

const StudyProcessCanada: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const studySteps: StudyStep[] = [
    {
      step: 1,
      title: "Research and Choose Your Course and College/University",
      description:
        "Explore Canadian institutions and programs that match your goals. Consider location, tuition fees, scholarships, and student services.",
      icon: <NotebookPen className="w-full h-full from-inherit" />,
    },
    {
      step: 2,
      title: "Check Entry Requirements",
      description:
        "Review the academic and English/French language requirements. Prepare for and take any necessary language tests (IELTS, TOEFL, etc.).",
      icon: <ScanLine className="w-full h-full from-inherit" />,
    },
    {
      step: 3,
      title: "Apply to the Institution",
      description:
        "Apply through the institution’s application portal. Submit documents like transcripts, SOP, and references as required.",
      icon: <School className="w-full h-full from-inherit" />,
    },
    {
      step: 4,
      title: "Receive Letter of Acceptance (LOA)",
      description:
        "Once accepted, you'll receive a Letter of Acceptance (LOA), which is essential for your Canadian student visa application.",
      icon: <TicketPercent className="w-full h-full from-inherit" />,
    },
    {
      step: 5,
      title: "Apply for Your Canadian Study Permit",
      description:
        "Use your LOA to apply for a study permit. Ensure you meet all financial, health, and security requirements set by IRCC.",
      image: "/step-5-prepare.jpg",
    },
    {
      step: 6,
      title: "Arrange Travel and Pre-departure Preparation",
      description:
        "Book accommodation, flights, and attend any pre-departure briefings. Carry essential documents and prepare for life in Canada.",
      image: "/step-5-prepare.jpg",
    },
  ];

  const sidebarLinks: SidebarLink[] = [
    { href: "/study/aus", label: "Study in Australia" },
    { href: "/study/uk", label: "Study in UK" },
    { href: "/study-process-canada", label: "Study in Canada", active: true },
    { href: "/study/usa", label: "Study in USA" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Study Process for Canada | GenZ Global</title>
        <meta
          name="description"
          content="Learn about the step-by-step process to study in Canada with GenZ Global."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('/can1.jpeg')`,
          backgroundPosition: `center ${offset}px`,
        }}
      >
        <Image
          src="/canada.jpg"
          alt="Study in Canada"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-[0.5] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Study in{" "}
              <span className="text-GenZ-secondary shadow-inner">Canada</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-md mx-auto drop-shadow-md">
              Your journey to a world-class education starts here with GenZ Global
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
              Your Path to Studying in{" "}
              <span className="text-GenZ-secondary">Canada</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              At GenZ Global, we simplify the process of studying in Canada. Follow these steps to begin your journey to a world-class education.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {studySteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Step Icon/Image */}
                  <div className="w-full text-GenZ-secondary sm:w-12 h-32 relative rounded-lg overflow-hidden">
                    {item.icon ? (
                      item.icon
                    ) : item.image ? (
                      <Image
                        src={item.image}
                        alt={`Step ${item.step}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    ) : null}
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

export default StudyProcessCanada;
