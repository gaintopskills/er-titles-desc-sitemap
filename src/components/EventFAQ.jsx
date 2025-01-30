import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "How does the onsite embroidery activation by E&R Unlimited differ from other companies",
    answer:
      "We have been doing it for years, and our experience makes the difference when working under quick-turn circumstances onsite. We use the latest machinery while using experienced embroidery machine operators from our factory staff, unlike other companies who hire temporary labor for events. This helps us achieve the highest output per hour and minimize order processing errors (correct spelling, requested font/color, accurate placement – no crooked embroideries, etc.)",
  },
  {
    question: "How many pieces can you produce per hour onsite",
    answer:
      "We can typically output 20 – 30 embroidery initials per hour per machine. For example, a 3-hour event with 150 guests typically requires two machines, operators, and admin staff to manage the inflow of orders to avoid confusion and order mismatch.",
  },
  {
    question: "What if I need you to stay extra hours",
    answer:
      "We may authorize extra hours at the event for an additional cost accordingly.",
  },
  {
    question: "Do you offer various fonts and thread colors?",
    answer: (
      <div>
        <p>
          Yes, our machines include up to 6 font choices (see below), and we can also include up to 8 thread colors.
        </p>
        <img
          src="/events/onsite-font-choices.webp"  // Replace with actual image path
          alt="Font and Thread Color Options"
          className="mt-4 w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    question: "What if we want a font that is not part part of the 6 fonts built into your new machine?",
    answer:
      "We can bring a digitizing system with a respective digitizer to type names/initials on the fly with a choice of 100s of fonts (can provide you with a PDF of available fonts upon request)",
  },
  {
    question: "Is it possible to customize goods with an embroidered or printed logo pre-event and add guest initial to the items onsite?",
    answer:
      "Yes, we can screenprint, create patches, or direct embroider logos onto products such as hats, tote bags, apparel, etc. pre-event and add your guests’ initials during the event (say on the side or back of the hat, etc).",
  },
  {
    question: "Do you offer any other customization service other than embroidery?",
    answer:
      "Yes, we can bring heat presses to apply all kinds of patches, heat transfer prints, and rhinestone designs that can be customized pre-event (we usually need 3-4 weeks to prep unless we use generic patches).",
  },
  {
    question: "What about the setup and commute time to and from the venue?",
    answer:
      "We usually charge half the rate for commute and setup time, especially when traveling outside our West Coast hub.",
  },
  {
    question: "What about the setup and commute time to and from the venue?",
    answer:
      "We usually charge half the rate for commute and setup time, especially when traveling outside our West Coast hub.",
  },
  {
    question: "Do you have minimum charge per event?",
    answer:
      "$2500 for one machine, one operator, and one event.",
  },
  {
    question: "How much do you charge per hour and for multiple machines?",
    answer:
      "We can provide custom pricing for your event if you provide the information in the Form on this page.",
  },

];

export const EventFAQ = () => (
  <section className="relative bg-black text-white py-12 sm:py-16 px-4 sm:px-8">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQData.map((item, index) => (
            <FAQBox
              key={`${item.question}-${index}`}
              title={item.question}
              content={item.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="border border-gray-600 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-5 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M4.167 12.5L10 6.667 15.833 12.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-300 mt-2">{content}</p>
      </motion.div>
    </div>
  );
};
