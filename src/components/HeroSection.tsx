import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-helvetica text-white mb-6 leading-tight">
            Expert Overseas Education Consulting for{' '}
            <span className="text-yellow-300">Mumbai Students</span>
          </h1>
          <p className="text-xl md:text-2xl font-montserrat text-gray-200 mb-8 leading-relaxed">
            Personalized guidance for your dream universities in USA, UK, Canada & beyond—right from our Mumbai office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-secondary hover:bg-secondary-light text-white font-semibold font-montserrat px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <span>Book Your Free Mumbai Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold font-montserrat px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Success Stories</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;