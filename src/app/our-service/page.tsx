const services = [
    {
      icon: "🎯",
      title: "Career Counseling & Visa Processing",
      description:
        "We provide personalized, student-focused counselling to help you identify the right course, career path, and study destination. Our experienced visa team ensures every application is accurate, complete, and fully compliant with embassy requirements—maximizing your approval chances.",
      points: [
        "Course & country matching",
        "Genuine Temporary Entrant (GTE) guidance",
        "Document preparation & submission",
        "Interview preparation (if required)",
      ],
    },
    {
      icon: "🎓",
      title: "University & College Selection",
      description:
        "With our global network of trusted institutions, we help you choose the right university or college based on your goals, budget, academic history, and future plans.",
      points: [
        "Access to top universities in Australia, UK, Canada, USA, Ireland, NZ & Denmark",
        "Transparent admission advice",
        "Institution comparisons and application support",
      ],
    },
    {
      icon: "🇬🇧",
      title: "English Language Proficiency Classes",
      description:
        "We offer expert-led preparation for English language tests required for study abroad. Our certified trainers focus on building the confidence and skills you need to succeed.",
      points: [
        "IELTS, Duolingo, and PTE training",
        "Small group & one-on-one options",
        "Mock tests and progress tracking",
        "Flexible timings",
      ],
    },
    {
      icon: "🩺",
      title: "Overseas Student Health Cover (OSHC)",
      description:
        "For countries like Australia and others that require health insurance for student visa holders, we assist in arranging approved coverage at competitive rates.",
      points: [
        "OSHC & other required insurance types",
        "Direct coordination with registered providers",
        "Affordable and compliant options",
        "Peace of mind while studying abroad",
      ],
    },
    {
      icon: "✈",
      title: "Pre-Departure & Post-Arrival Assistance",
      description:
        "Your journey doesn’t end with the visa. We prepare you to settle smoothly in your new country—and support you even after you arrive.",
      points: [
        "Travel tips & cultural orientation",
        "Accommodation and packing advice",
        "Airport pickup info",
        "Support network setup",
        "Emergency contact guidance",
        "Ongoing student welfare check-ins",
      ],
    },
  ];
  
  const Services = () => {
    return (
      <section id="services" className="py-20 px-5 md:px-10 bg-[#f9f9f9] dark:bg-[#0f172a]">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold  text-GenZ-secondary mb-4">
            Our Services
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming lives through expert, ethical, and end-to-end international education support.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-slate-800 transition-all hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-purple mb-2">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
      </section>
    );
  };
  
  export default Services;
  