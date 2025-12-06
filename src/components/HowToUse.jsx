import { motion } from 'framer-motion';
import { Scale, Settings, Syringe, CalendarCheck, ChevronRight, CheckCircle } from 'lucide-react';

function HowToUse() {
  const steps = [
    {
      icon: <Scale size={24} />,
      title: "1. Weigh Your Horse",
      description: "Accurately measure body weight for proper dosage calculation.",
      color: "from-blue-500 to-blue-600",
      tips: ["Use weight tape or scale", "Round up to nearest 50 lbs"]
    },
    {
      icon: <Settings size={24} />,
      title: "2. Set Dosage",
      description: "Adjust syringe to match your horse's weight using calibrated markings.",
      color: "from-red-500 to-red-600",
      tips: ["Unlock safety ring", "Slide to correct marking"]
    },
    {
      icon: <Syringe size={24} />,
      title: "3. Administer Paste",
      description: "Place syringe in corner of mouth and depress plunger completely.",
      color: "from-green-500 to-green-600",
      tips: ["Hold head steady", "Ensure full dose delivery"]
    },
    {
      icon: <CalendarCheck size={24} />,
      title: "4. Follow Schedule",
      description: "Maintain proper deworming intervals as recommended by your vet.",
      color: "from-purple-500 to-purple-600",
      tips: ["8-12 week intervals", "Rotate products yearly"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-gray-200/[0.02] bg-grid-16" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle size={16} />
            Easy to Use
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple <span className="text-red-600">4-Step</span> Administration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our calibrated syringe makes deworming precise, easy, and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Step number */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-1 ml-4" />
              </div>

              {/* Step card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-10 blur-xl rounded-full" style={{ background: `linear-gradient(to bottom right, ${step.color.replace('from-', '').replace('to-', '')})` }} />
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>

                {/* Tips */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                <div className="text-2xl font-bold text-gray-900 mb-2">1.87%</div>
                <div className="text-sm text-gray-600">Active Ingredient</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                <div className="text-2xl font-bold text-gray-900 mb-2">Apple-Flavored</div>
                <div className="text-sm text-gray-600">For Easy Administration</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                <div className="text-2xl font-bold text-gray-900 mb-2">Pre-Measured</div>
                <div className="text-sm text-gray-600">Calibrated Syringe</div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              Always consult your veterinarian for specific dosage recommendations
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowToUse;