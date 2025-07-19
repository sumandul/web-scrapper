// app/code-of-conduct/page.tsx (for Next.js 13/14 App Router)

export default function CodeOfConductPage() {
    const sections = [
      {
        title: "1. Our Commitment",
        content:
          "At Gen Z Global Education & Visa Services Pvt. Ltd., we are committed to maintaining the highest standards of professionalism, integrity, and ethical behaviour. This Code of Conduct outlines the principles and expectations that guide our work with students, parents, education providers, and partners globally.",
      },
      {
        title: "2. Professional Integrity",
        content: [
          "We provide honest, accurate, and up-to-date information to all students and clients.",
          "We never misrepresent courses, institutions, or visa outcomes.",
          "We do not engage in misleading marketing, false promises, or unethical practices.",
        ],
      },
      {
        title: "3. Student-Centred Approach",
        content: [
          "We act in the best interest of the student at all times.",
          "We ensure students are guided toward courses and institutions appropriate to their goals, background, and capacity.",
          "We explain all options clearly and transparently, ensuring informed decisions.",
        ],
      },
      {
        title: "4. Compliance with Laws and Regulations",
        content: [
          "We comply with all relevant laws, immigration policies, and institutional requirements in Nepal and destination countries.",
          "We uphold the standards set by our certifications (e.g., ICEF, QEAC, British Council, and MOE).",
          "We cooperate fully with audits, quality checks, and institutional oversight.",
        ],
      },
      {
        title: "5. Anti-Fraud and Zero Tolerance",
        content: [
          "We maintain a zero-tolerance policy against document fraud, false statements, or unethical shortcuts.",
          "Any staff or sub-agent found violating this will face immediate disciplinary action and legal consequences if necessary.",
        ],
      },
      {
        title: "6. Confidentiality and Privacy",
        content: [
          "We protect the personal and academic data of our clients in accordance with our Privacy Policy.",
          "We do not disclose client information to any third party without written consent, except where required by law.",
        ],
      },
      {
        title: "7. Respect and Inclusivity",
        content: [
          "We treat all individuals—regardless of gender, ethnicity, religion, or background—with dignity and respect.",
          "We promote an inclusive environment for both clients and team members.",
          "Discrimination, harassment, or abuse of any kind is not tolerated.",
        ],
      },
      {
        title: "8. Accountability",
        content: [
          "Our team members are responsible for the quality and honesty of their counselling and services.",
          "We acknowledge and correct any mistakes openly and promptly.",
          "Feedback and complaints are welcomed and handled fairly and confidentially.",
        ],
      },
      {
        title: "9. Representation and Branding",
        content: [
          "All sub-agents and representatives must use Gen Z Global branding and materials appropriately and only with prior permission.",
          "No unauthorized use of logos, certificates, or marketing materials is allowed.",
        ],
      },
      {
        title: "10. Continuous Improvement",
        content: [
          "We regularly review our services, policies, and training to maintain the highest standards.",
          "All staff and partners are expected to participate in ongoing professional development.",
        ],
      },
    ];
  
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6  text-GenZ-secondary">Code of Conduct</h1>
      
  
        {sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">    
                {section.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{section.content}</p>
            )}
          </div>
        ))}
  
      
      </main>
    );
  }
  