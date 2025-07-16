import React from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-helvetica text-white mb-6">
            Ready to Begin Your Global Education Journey?
          </h2>
          <p className="text-xl font-montserrat text-gray-200 mb-8 leading-relaxed">
            Take the first step towards your dream university. Our Mumbai experts are here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold font-montserrat px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3">
              <Calendar className="h-5 w-5" />
              <span>Schedule Your Free Mumbai Session</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold font-montserrat px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>Call Now: +91 98765 43210</span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-white/90">
            <div>
              <div className="text-3xl font-bold font-helvetica mb-2">24/7</div>
              <div className="font-montserrat">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-helvetica mb-2">100%</div>
              <div className="font-montserrat">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-helvetica mb-2">Free</div>
              <div className="font-montserrat">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
    </section>
  );
};

export default CTASection;