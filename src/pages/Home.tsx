
import { useState } from 'react';
import DomainBox from '../components/DomainBox';
import DomainModal from '../components/DomainModal';

const Home = () => {
  const [selectedDomain, setSelectedDomain] = useState<{
    title: string;
    departments: string[];
  } | null>(null);

  const domains = [
    {
      title: 'Education',
      icon: '📚',
      description: 'Empowering communities through quality education',
      departments: [
        'Primary Education',
        'Secondary Education',
        'Vocational Training',
        'Adult Literacy',
        'Digital Literacy',
        'Teacher Training',
        'Educational Resources',
        'Scholarship Programs',
        'Special Education',
        'Language Development',
        'Career Guidance'
      ]
    },
    {
      title: 'Healthcare',
      icon: '🏥',
      description: 'Providing accessible healthcare services',
      departments: [
        'Primary Healthcare',
        'Community Medicine',
        'Mental Health',
        'Maternal Care',
        'Child Health',
        'Preventive Care',
        'Health Awareness',
        'Medical Camps',
        'Emergency Services',
        'Nutrition Programs',
        'Health Insurance'
      ]
    },
    {
      title: 'Environment',
      icon: '🌱',
      description: 'Protecting and preserving our environment',
      departments: [
        'Conservation',
        'Renewable Energy',
        'Waste Management',
        'Water Conservation',
        'Afforestation',
        'Climate Action',
        'Sustainable Agriculture',
        'Environmental Education',
        'Pollution Control',
        'Biodiversity Protection',
        'Green Technology'
      ]
    },
    {
      title: 'Women Empowerment',
      icon: '👩',
      description: 'Promoting gender equality and women rights',
      departments: [
        'Skill Development',
        'Entrepreneurship',
        'Legal Aid',
        'Self Help Groups',
        'Leadership Training',
        'Financial Inclusion',
        'Health Awareness',
        'Education Support',
        'Domestic Violence Prevention',
        'Economic Empowerment',
        'Rights Advocacy'
      ]
    },
    {
      title: 'Rural Development',
      icon: '🏘️',
      description: 'Improving rural infrastructure and livelihoods',
      departments: [
        'Infrastructure Development',
        'Agricultural Support',
        'Water Supply',
        'Rural Banking',
        'Technology Access',
        'Market Linkages',
        'Cooperative Development',
        'Rural Housing',
        'Transportation',
        'Communication Systems',
        'Livelihood Programs'
      ]
    },
    {
      title: 'Child Welfare',
      icon: '👶',
      description: 'Ensuring child rights and protection',
      departments: [
        'Child Protection',
        'Nutrition Programs',
        'Early Childhood Care',
        'Child Education',
        'Health Services',
        'Recreation Activities',
        'Counseling Services',
        'Foster Care',
        'Adoption Services',
        'Child Rights Advocacy',
        'Special Needs Support'
      ]
    },
    {
      title: 'Elderly Care',
      icon: '👴',
      description: 'Supporting senior citizens and elderly care',
      departments: [
        'Senior Care Services',
        'Health Monitoring',
        'Social Activities',
        'Home Care',
        'Pension Support',
        'Medical Assistance',
        'Companionship Programs',
        'Recreation Activities',
        'Mental Health Support',
        'Emergency Services',
        'Family Support'
      ]
    },
    {
      title: 'Disaster Relief',
      icon: '🆘',
      description: 'Emergency response and disaster management',
      departments: [
        'Emergency Response',
        'Relief Distribution',
        'Rehabilitation',
        'Preparedness Training',
        'Risk Assessment',
        'Community Mobilization',
        'Recovery Programs',
        'Shelter Management',
        'Medical Emergency',
        'Food Security',
        'Psychological Support'
      ]
    },
    {
      title: 'Skill Development',
      icon: '🛠️',
      description: 'Building skills for better employment opportunities',
      departments: [
        'Technical Training',
        'Soft Skills',
        'Computer Training',
        'Handicrafts',
        'Entrepreneurship',
        'Job Placement',
        'Certification Programs',
        'Industry Partnerships',
        'Career Counseling',
        'Financial Literacy',
        'Innovation Labs'
      ]
    }
  ];

  const handleDomainClick = (domain: typeof domains[0]) => {
    setSelectedDomain({
      title: domain.title,
      departments: domain.departments
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">NALLORE VATTAM</h1>
          <p className="text-xl mb-8">Empowering Communities, Transforming Lives</p>
          <p className="text-lg max-w-2xl mx-auto">
            Dedicated to creating positive change in society through sustainable development, 
            community empowerment, and social welfare initiatives.
          </p>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Domains</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click on any domain to explore our departments and services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <DomainBox
                key={index}
                title={domain.title}
                icon={domain.icon}
                description={domain.description}
                onClick={() => handleDomainClick(domain)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
              <h2 className="text-3xl font-bold text-emerald-600 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a society where every individual has equal opportunities for growth and development, 
                where communities are self-reliant and sustainable, and where social justice and harmony prevail. 
                We envision a world free from poverty, inequality, and discrimination.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-teal-50 rounded-lg p-8 border border-teal-200">
              <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower marginalized communities through comprehensive development programs, advocacy for human rights, 
                and sustainable initiatives that address education, healthcare, environment, and social welfare. 
                We are committed to building a just and equitable society through collaborative efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <DomainModal
        isOpen={!!selectedDomain}
        onClose={() => setSelectedDomain(null)}
        domainTitle={selectedDomain?.title || ''}
        departments={selectedDomain?.departments || []}
      />
    </div>
  );
};

export default Home;
