import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us | Education Visa Services</title>
        <meta
          name="description"
          content="Learn more about our mission to simplify education visa processes."
        />
        <link rel="icon" href="/favicon/" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-GenZ-secondary to-GenZ-primary text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl">
              We’re here to guide students and families through the education
              visa process, opening doors to global learning opportunities.
            </p>
            <button className="px-6 py-3  bg-GenZ-primary  text-white font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/london.jpg" // Replace with an education-themed image
              alt="Students studying abroad"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 text-gray-50 fill-current"
          >
            <path d="M0,0 C280,80 720,120 1440,0 V120 H0 Z" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Our <span className=" text-GenZ-secondary">Mission</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our goal is to simplify the education visa journey, empowering
            students to pursue their dreams of studying abroad with confidence
            and ease.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Providing personalized support for every step of the visa
                application process.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Connecting students to top educational institutions worldwide.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Success Driven
              </h3>
              <p className="text-gray-600">
                Ensuring high approval rates with thorough preparation and
                expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
     
    </div>
  );
}
