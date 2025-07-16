import React from 'react';
import { MapPin, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Mumbai-based consultants who understand city-specific requirements & culture.'
  },
  {
    icon: Users,
    title: 'Dedicated Mentors',
    description: 'One-on-one sessions with experienced advisors who track your progress.'
  },
  {
    icon: Heart,
    title: 'End-to-End Support',
    description: 'From university shortlisting to visa filing—complete hand-holding at every step.'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-helvetica text-primary mb-4">
            Why Choose Our Mumbai Office
          </h2>
          <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Experience personalized guidance with our dedicated Mumbai team who understand your local context and global aspirations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-helvetica text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-montserrat text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;