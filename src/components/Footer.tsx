import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold font-helvetica mb-4">Abroad Eduversity</h3>
            <p className="text-xl text-secondary font-semibold font-montserrat mb-4">Mumbai Branch</p>
            <p className="font-montserrat text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for overseas education. We've been helping Mumbai students achieve their global education dreams for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-helvetica mb-4">Contact Mumbai Office</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div className="font-montserrat text-gray-300">
                  <p>123 Business Hub,</p>
                  <p>Andheri East,</p>
                  <p>Mumbai - 400069</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="font-montserrat text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="font-montserrat text-gray-300">mumbai@abroadeduversity.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary mt-1" />
                <div className="font-montserrat text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-helvetica mb-4">Quick Links</h4>
            <ul className="space-y-2 font-montserrat text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-200">Our Services</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-200">Test Preparation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-200">Visa Assistance</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="font-montserrat text-gray-300">
            © 2024 Abroad Eduversity Mumbai Branch. All rights reserved. | 
            <a href="#" className="text-secondary hover:text-secondary-light ml-1">Privacy Policy</a> | 
            <a href="#" className="text-secondary hover:text-secondary-light ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;