import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingCart, Package, Scale, Award, Shield, Truck, ChevronRight, Star, Zap } from 'lucide-react';

function ProductDetails({ amazonUrl }) {
  const [selectedImage, setSelectedImage] = useState('/assets/1.jpg');

  const productImages = [
    { src: '/assets/1.jpg', alt: 'Ivermectin Paste Syringe' },
    { src: '/assets/2.jpg', alt: 'Dosing Instructions' },
    { src: '/assets/3.jpg', alt: 'Broad Spectrum Protection' },
    { src: '/assets/4.jpg', alt: 'Trusted Formula' },
  ];

  const features = [
    'Effective against major equine parasites',
    'Single-dose oral syringe up to 1,250 lbs',
    'Apple flavor for easy administration',
    'Vet-recommended formula with precise dosing',
    'Safe for foals, mares, and stallions'
  ];

  const specifications = [
    { icon: <Zap size={18} />, label: 'Active Ingredient', value: 'Ivermectin 1.87%' },
    { icon: <Scale size={18} />, label: 'Treatment Weight', value: 'Up to 1,250 lbs' },
    { icon: <Package size={18} />, label: 'Net Weight', value: '0.21 oz (6.08 g)' },
    { icon: <Award size={18} />, label: 'Flavor', value: 'Apple' },
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/[0.02] bg-grid-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage}
                  alt="Selected product view"
                  className="w-full h-full object-contain p-8"
                />
              </AnimatePresence>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                <Star size={14} />
                Best Seller
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.src)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === image.src
                      ? 'border-red-500 shadow-lg scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${selectedImage === image.src
                      ? 'bg-red-500/10'
                      : 'bg-black/0 hover:bg-black/5'
                    } transition-colors`} />
                </button>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">FDA Approved</div>
                  <div className="text-xs text-gray-500">NADA #140-971</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Truck size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-xs text-gray-500">On orders $35+</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ivermectin Paste <span className="text-red-600">1.87%</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Premium apple-flavored dewormer for effective parasite control in horses.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Benefits</h3>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Specifications */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      {spec.icon}
                      <span className="text-xs font-medium">{spec.label}</span>
                    </div>
                    <div className="font-semibold text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-red-600/20 hover:shadow-red-600/30 transition-all group"
              >
                <div className="flex items-center justify-center gap-3">
                  <ShoppingCart size={22} />
                  <span>Shop on Amazon</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              {/* Guarantee */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <Check size={16} className="text-green-500" />
                  <span>30-day satisfaction guarantee • Free returns</span>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">4.8/5 from 1,247 reviews</div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">5,000+</div>
                  <div className="text-sm text-gray-600">Sold this month</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;