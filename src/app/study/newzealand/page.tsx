"use client";

import {
  NotebookPen,
  ScanLine,
  School,
  Send,
  ShieldCheck,
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

const StudyProcessNZ: React.FC = () => {
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
      title: "Research and Choose Your Course and Institution",
      description:
        "Explore universities and colleges in New Zealand that align with your goals. Factor in tuition, location, and student support.",
      icon: <NotebookPen className="w-full h-full from-inherit" />,
    },
    {
      step: 2,
      title: "Check Entry Requirements",
      description:
        "Review academic qualifications and English language tests (like IELTS). Prepare required certificates.",
      icon: <ScanLine className="w-full h-full from-inherit" />,
    },
    {
      step: 3,
      title: "Apply to Institutions",
      description:
        "Submit applications along with required documents such as SOP, references, and academic transcripts.",
      icon: <School className="w-full h-full from-inherit" />,
    },
    {
      step: 4,
      title: "Receive Offer Letter",
      description:
        "After evaluation, the institution sends an Offer of Place. This is needed for your visa application.",
      icon: <TicketPercent className="w-full h-full from-inherit" />,
    },
    {
      step: 5,
      title: "Apply for Student Visa",
      description:
        "Use your Offer Letter to apply for a New Zealand student visa. Include financial and health documents.",
        icon: <ShieldCheck className="w-full h-full from-inherit" />,
    },
    {
      step: 6,
      title: "Prepare for Departure",
      description:
        "Book travel, arrange accommodation, and attend any pre-departure orientations by GenZ Global.",
        icon: <TicketPercent className="w-full h-full from-inherit" />,
    },
  ];

  const sidebarLinks: SidebarLink[] = [
    { href: "/study/aus", label: "Study in Australia" },
    { href: "/study/uk", label: "Study in UK" },
    { href: "/study/canada", label: "Study in Canada" },
    { href: "/study/newzealand", label: "Study in New Zealand", active: true },
    { href: "/study/usa", label: "Study in USA" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Study Process for New Zealand | GenZ Global</title>
        <meta
          name="description"
          content="Learn about the step-by-step process to study in New Zealand with GenZ Global."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('/new.jpg')`,
          backgroundPosition: `center ${offset}px`,
        }}
      >
        <Image
          src="/new.jpg"
          alt="Study in New Zealand"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-[0.5] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Study in
              <span className="text-GenZ-secondary shadow-inner">New Zealand</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-md mx-auto drop-shadow-md">
              Begin your academic journey with GenZ Global in a beautiful and innovative country
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
              <span className="text-GenZ-secondary">New Zealand</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              GenZ Global is here to make your dream of studying in New Zealand a reality. Follow these steps to start your future today.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {studySteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
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

export default StudyProcessNZ;
