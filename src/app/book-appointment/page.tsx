"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const BookAppointment = () => {
  // Testimonial state for carousel

  // Listen for Calendly events
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log("Event scheduled:", e.data.payload);
      alert("Appointment booked successfully!");
    },
  });

  // Animation variants
  const calendlyVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Auto-scroll testimonials

  return (
    <div className="">
      {/* <section className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-darkBlue mb-4">
          Book Your Appointment Today!
        </h1>
        <p className="text-lightGray text-lg">
          Take the First Step Towards Your Dream Education Abroad
        </p>
      </section> */}

      {/* Main Content Section */}
      <section className="container mx-auto ">
        {/* Calendly Widget Section */}
        <div className=" grid grid-cols-2 ">
          <div>
            {" "}
            <Image
              src="/contact.gif"
              alt="Your GIF descripn"
              className="w-full h-full object-cover rounded-md"
              width={500}
              height={400}
            />
          </div>
          <div>
            <motion.div
              className=" mb-20"
              variants={calendlyVariants}
              initial="hidden"
              animate="visible"
            >
              <InlineWidget
                url="https://calendly.com/genzglobal/" // Replace with your Calendly link
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "00B7EB", // Match your theme's primaryCyan
                  textColor: "1A3C5A", // Match your theme's darkBlue
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
