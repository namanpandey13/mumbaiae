import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold font-helvetica text-primary">
                Abroad Eduversity
              </h1>
              <p className="text-xs font-montserrat text-secondary font-medium">Mumbai Branch</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm font-montserrat text-gray-600">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-montserrat text-gray-600">
              <Mail className="h-4 w-4 text-secondary" />
              <span>mumbai@abroadeduversity.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;