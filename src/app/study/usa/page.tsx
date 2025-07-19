// pages/study-process-usa.tsx
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

const StudyProcessUSA: React.FC = () => {
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
      title: "Research and Choose Your Course",
      description:
        "Explore universities and programs in the USA that align with your academic goals. OMG Education helps you make informed choices based on your profile and interests.",
      icon: <NotebookPen className="w-full h-full from-inherit" />,
    },
    {
      step: 2,
      title: "Meet Admission Requirements",
      description:
        "Understand academic and English language proficiency requirements such as TOEFL, IELTS, or SAT/ACT. We'll help you evaluate and prepare your documentation.",
      icon: <ScanLine className="w-full h-full from-inherit" />,
    },
    {
      step: 3,
      title: "Apply to US Universities",
      description:
        "Apply via the Common App or directly to universities for both undergraduate and postgraduate programs. We support you in crafting strong personal statements and application packages.",
      icon: <School className="w-full h-full from-inherit" />,
    },
    {
      step: 4,
      title: "Get Acceptance and Apply for Visa",
      description:
        "Once admitted and issued an I-20 form by a US institution, we’ll help you apply for an F-1 Student Visa and prepare for your visa interview.",
      icon: <TicketPercent className="w-full h-full from-inherit" />,
    },
    {
      step: 5,
      title: "Prepare for Your Journey to the USA",
      description:
        "We assist you in booking flights, securing accommodation, and attending pre-departure briefings so you're fully prepared for life and studies in the USA.",
        icon: <TicketPercent className="w-full h-full from-inherit" />,
    },
  ];

  const sidebarLinks: SidebarLink[] = [
    { href: "/study/aus", label: "Study in Australia" },
    { href: "/study/uk", label: "Study in UK" },
    { href: "/study-process-canada", label: "Study in Canada" },
    { href: "/study/usa", label: "Study in USA", active: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Study Process for USA | GenZ Global</title>
        <meta
          name="description"
          content="Learn about the step-by-step process to study in the USA with GenZ Global."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('/us.jpg')`,
          backgroundPosition: `center ${offset}px`,
        }}
      >
        <Image
          src="/us.jpg"
          alt="Study in the USA"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-[0.5] flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
              Study in the{" "}
              <span className="text-GenZ-secondary shadow-inner">USA</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-md mx-auto drop-shadow-md">
              Begin your academic journey in the United States with OMG
              Education.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Your Path to Studying in the{" "}
              <span className="text-GenZ-secondary">USA</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              OMG Education provides a streamlined guide to help you pursue
              higher education in the United States. Follow these steps for a
              smooth and successful experience.
            </p>

            <div className="space-y-8">
              {studySteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
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

export default StudyProcessUSA;
