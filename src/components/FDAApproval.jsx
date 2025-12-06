import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ExternalLink, CheckCircle } from 'lucide-react';

function FDAApproval() {
    return (
        <section className="py-20 bg-blue-50/90 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100">
                            <ShieldCheck size={16} />
                            <span>Officially Certified</span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            FDA Approved & <br />
                            <span className="text-blue-600">Verified Authentic</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Durvalis Ivermectin Paste 1.87% has undergone rigorous testing and has been officially approved by the U.S. Food and Drug Administration (FDA) for equine use. We prioritize your horse's safety above all else.
                        </p>

                        <div className="space-y-4 mb-20">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                                <span className="text-gray-800 font-medium">NADA (New Animal Drug Application) #140-971</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                                <span className="text-gray-800 font-medium">Manufactured in GMP Certified Facility</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                                <span className="text-gray-800 font-medium">Batch Tested for Purity & Potency</span>
                            </div>
                        </div>

                        <a
                            href="https://www.fda.gov/animal-veterinary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all group"
                        >
                            <FileText size={20} />
                            Verify Approval Document
                            <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </motion.div>

                    {/* Visual Content - Certificate Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[2rem] transform rotate-3 scale-105"></div>
                        <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
                            {/* Certificate Border */}
                            <div className="border-4 border-double border-gray-200 h-full p-8 relative">

                                {/* Header */}
                                <div className="text-center border-b-2 border-gray-100 pb-8 mb-8">
                                    <div className="w-20 h-20 mx-auto bg-gray-900 text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mb-4">
                                        FDA
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900">Certificate of Approval</h3>
                                    <p className="text-gray-500 mt-2 font-serif italic">U.S. Food and Drug Administration</p>
                                </div>

                                {/* Body */}
                                <div className="text-center font-serif space-y-6">
                                    <p className="text-lg text-gray-800">
                                        This certifies that the product
                                    </p>
                                    <p className="text-3xl font-bold text-blue-900 font-sans">
                                        Durvalis Ivermectin Paste
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        has met all safety and efficacy standards required for veterinary pharmaceutical products under NADA #140-971.
                                    </p>
                                </div>

                                {/* Footer */}
                                <div className="mt-12 pt-8 border-t-2 border-gray-100 flex justify-between items-end">
                                    <div className="text-left">
                                        <div className="h-10 w-32 bg-contain bg-no-repeat bg-center opacity-50 mb-2" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0xMCAzMGMxMC0xMCAyMC0xMCAzMCAwczIwIDEwIDMwIDBzMjAtMTAgMzAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')" }}></div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">Authorized Signature</p>
                                    </div>
                                    <div className="h-16 w-16 bg-blue-900/10 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="text-blue-900 w-8 h-8" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Validated Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-6 -right-6 bg-yellow-400 text-yellow-900 p-4 rounded-full shadow-lg flex items-center gap-2 font-bold border-4 border-white"
                        >
                            <CheckCircle size={24} />
                            <span>Verified 2024</span>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default FDAApproval;
