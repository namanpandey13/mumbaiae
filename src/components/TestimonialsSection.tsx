import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    text: "Abroad Eduversity's Mumbai team made all the difference—seamless process, timely updates, and incredible support throughout my journey.",
    author: "Sneha Patel",
    university: "University of Toronto admit",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    text: "Their personal approach helped me secure a 90% scholarship in Australia. The Mumbai team's dedication is unmatched.",
    author: "Rohan Mehta",
    university: "University of Melbourne",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    text: "From IELTS prep to visa approval, the Mumbai consultants guided me every step of the way. Now studying at my dream university!",
    author: "Priya Sharma",
    university: "University of British Columbia",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-helvetica text-primary mb-4">
            Trusted by Mumbai's Future Achievers
          </h2>
          
          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="h-8 w-8" />
              <span className="text-4xl font-bold font-helvetica">500+</span>
            </div>
            <p className="text-xl font-montserrat">
              Students placed in top universities last year from our Mumbai office
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-montserrat text-gray-700 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full object-cover border-4 border-secondary"
              />
              <div className="text-center md:text-left">
                <div className="font-bold font-helvetica text-primary text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="font-montserrat text-secondary font-medium">
                  {testimonials[currentIndex].university}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;