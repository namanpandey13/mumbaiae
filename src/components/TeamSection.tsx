import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Anjali Rao',
    title: 'Senior Consultant',
    experience: '10 years experience',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    specialties: ['USA Universities', 'MBA Programs', 'Scholarship Guidance']
  },
  {
    name: 'Vikram Desai',
    title: 'Visa Expert',
    experience: '1000+ approvals',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    specialties: ['Student Visas', 'Documentation', 'Interview Prep']
  },
  {
    name: 'Priya Kulkarni',
    title: 'Test Prep Specialist',
    experience: '8 years experience',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    specialties: ['IELTS', 'TOEFL', 'GRE Coaching']
  },
  {
    name: 'Rahul Joshi',
    title: 'UK & Europe Specialist',
    experience: '12 years experience',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    specialties: ['UK Universities', 'Europe Programs', 'Research Programs']
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-helvetica text-primary mb-4">
            Meet Your Mumbai Team
          </h2>
          <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Our experienced consultants bring years of expertise and personal attention to guide you through your study abroad journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-secondary/20 group-hover:border-secondary transition-colors duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-secondary text-white rounded-full p-2">
                  <Award className="h-4 w-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold font-helvetica text-primary mb-2">
                {member.name}
              </h3>
              <p className="font-semibold font-montserrat text-secondary mb-1">
                {member.title}
              </p>
              <p className="text-sm font-montserrat text-gray-600 mb-4">
                {member.experience}
              </p>
              
              <div className="space-y-2">
                {member.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2 text-sm font-montserrat text-gray-600">
                    <CheckCircle className="h-3 w-3 text-secondary" />
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;