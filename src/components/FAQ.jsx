import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

function FAQ({ amazonUrl }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How often should I administer this paste?",
      answer: "Consult your veterinarian for a deworming schedule tailored to your horse's specific needs, typically every 2-3 months during the grazing season."
    },
    {
      question: "What if my horse has an adverse reaction?",
      answer: "Discontinue use immediately and contact your veterinarian. Adverse reactions are rare but should be addressed promptly."
    },
    {
      question: "Is it safe for pregnant mares?",
      answer: "Consult your veterinarian before administering to pregnant or nursing mares. Safety studies support use in most cases."
    },
    {
      question: "Can I use this product on other animals?",
      answer: "This product is formulated specifically for horses. Do not use on other species without veterinary guidance."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about Durvalis Ivermectin Paste.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewpo r t={{ once: true }}
              transiti o n={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-red-200 shadow-lg bg-red-50/30' : 'border-gray-200 hover:border-red-200'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className={`font-bold text-lg transition-colors ${openFaq === index ? 'text-red-700' : 'text-gray-800 group-hover:text-red-600'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${openFaq === index ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-red-500'}`}>
                  {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
