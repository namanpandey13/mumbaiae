import React from 'react';
import { GraduationCap, BookOpen, Target, DollarSign, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Undergraduate Placements',
    description: 'Comprehensive guidance for bachelor\'s degree admissions worldwide.',
    color: 'from-blue-500 to-primary'
  },
  {
    icon: BookOpen,
    title: 'Postgraduate Admissions',
    description: 'Expert support for master\'s and PhD program applications.',
    color: 'from-secondary to-teal-600'
  },
  {
    icon: Target,
    title: 'Test Prep (IELTS, GRE, GMAT, TOEFL)',
    description: 'Personalized coaching to achieve your target scores.',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: DollarSign,
    title: 'Scholarship & Loan Assistance',
    description: 'Maximize funding opportunities for your education abroad.',
    color: 'from-green-500 to-green-700'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-helvetica text-primary mb-4">
            Our Services Overview
          </h2>
          <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            From initial counseling to final visa approval, we provide comprehensive support for every step of your study abroad journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-helvetica text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="font-montserrat text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-secondary hover:text-secondary-light font-semibold font-montserrat flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;