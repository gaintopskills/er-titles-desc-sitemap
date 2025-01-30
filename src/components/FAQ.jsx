import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations.",
  },
  {
    question: "How to claim your 25% discount offer?",
    answer:
      "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "How to get support for the product?",
    answer:
      "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have.",
  },
];

export const FAQ = () => (
  <section className="relative bg-black text-white py-12 sm:py-16 px-4 sm:px-8">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-400 tracking-wide uppercase">
          Have any questions?
        </p>
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
