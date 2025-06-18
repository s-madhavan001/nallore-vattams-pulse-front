
import { useState } from 'react';
import DomainBox from '../components/DomainBox';
import DomainModal from '../components/DomainModal';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t, language } = useLanguage();
  const [selectedDomain, setSelectedDomain] = useState<{
    title: string;
    departments: string[];
  } | null>(null);

  // Department translations
  const departmentTranslations = {
    english: {
      education: [
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
      ],
      healthcare: [
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
      ],
      environment: [
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
      ],
      womenEmpowerment: [
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
      ],
      ruralDevelopment: [
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
      ],
      childWelfare: [
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
      ],
      elderlyCare: [
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
      ],
      disasterRelief: [
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
      ],
      skillDevelopment: [
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
    },
    tamil: {
      education: [
        'ஆரம்ப கல்வி',
        'இடைநிலை கல்வி',
        'தொழில் பயிற்சி',
        'வயது வந்தோர் கல்வியறிவு',
        'டிஜிட்டல் கல்வியறிவு',
        'ஆசிரியர் பயிற்சி',
        'கல்வி வளங்கள்',
        'உதவித்தொகை திட்டங்கள்',
        'சிறப்பு கல்வி',
        'மொழி வளர்ச்சி',
        'தொழில் வழிகாட்டுதல்'
      ],
      healthcare: [
        'முதல்நிலை சுகாதாரம்',
        'சமூக மருத்துவம்',
        'மனநலம்',
        'தாய்மை பராமரிப்பு',
        'குழந்தை சுகாதாரம்',
        'தடுப்பு பராமரிப்பு',
        'சுகாதார விழிப்புணர்வு',
        'மருத்துவ முகாம்கள்',
        'அவசர சேவைகள்',
        'ஊட்டச்சத்து திட்டங்கள்',
        'சுகாதார காப்பீடு'
      ],
      environment: [
        'பாதுகாப்பு',
        'புதுப்பிக்கத்தக்க ஆற்றல்',
        'கழிவு மேலாண்மை',
        'நீர் பாதுகாப்பு',
        'காடு வளர்ப்பு',
        'காலநிலை நடவடிக்கை',
        'நிலையான விவசாயம்',
        'சுற்றுச்சூழல் கல்வி',
        'மாசு கட்டுப்பாடு',
        'பல்லுயிர் பாதுகாப்பு',
        'பச்சை தொழில்நுட்பம்'
      ],
      womenEmpowerment: [
        'திறன் மேம்பாடு',
        'தொழில் முனைவோர்',
        'சட்ட உதவி',
        'சுய உதவி குழுக்கள்',
        'தலைமைத்துவ பயிற்சி',
        'நிதி சேர்க்கை',
        'சுகாதார விழிப்புணர்வு',
        'கல்வி ஆதரவு',
        'குடும்ப வன்முறை தடுப்பு',
        'பொருளாதார வலுவூட்டல்',
        'உரிமைகள் வாதம்'
      ],
      ruralDevelopment: [
        'உள்கட்டமைப்பு வளர்ச்சி',
        'விவசாய ஆதரவு',
        'நீர் வழங்கல்',
        'கிராமிய வங்கி',
        'தொழில்நுட்ப அணுகல்',
        'சந்தை இணைப்புகள்',
        'கூட்டுறவு வளர்ச்சி',
        'கிராமிய வீட்டுவசதி',
        'போக்குவரத்து',
        'தகவல் தொடர்பு அமைப்புகள்',
        'வாழ்வாதார திட்டங்கள்'
      ],
      childWelfare: [
        'குழந்தை பாதுகாப்பு',
        'ஊட்டச்சத்து திட்டங்கள்',
        'ஆரம்பகால குழந்தைப் பராமரிப்பு',
        'குழந்தை கல்வி',
        'சுகாதார சேவைகள்',
        'பொழுதுபோக்கு நடவடிக்கைகள்',
        'ஆலோசனை சேவைகள்',
        'வளர்ப்பு பராமரிப்பு',
        'தத்தெடுப்பு சேவைகள்',
        'குழந்தை உரிமைகள் வாதம்',
        'சிறப்பு தேவைகள் ஆதரவு'
      ],
      elderlyCare: [
        'மூத்த பராமரிப்பு சேவைகள்',
        'சுகாதார கண்காணிப்பு',
        'சமூக நடவடிக்கைகள்',
        'வீட்டு பராமரிப்பு',
        'ஓய்வூதிய ஆதரவு',
        'மருத்துவ உதவி',
        'தோழமை திட்டங்கள்',
        'பொழுதுபோக்கு நடவடிக்கைகள்',
        'மனநல ஆதரவு',
        'அவசர சேவைகள்',
        'குடும்ப ஆதரவு'
      ],
      disasterRelief: [
        'அவசர மறுமொழி',
        'நிவாரண விநியோகம்',
        'மறுவாழ்வு',
        'தயார்நிலை பயிற்சி',
        'ஆபத்து மதிப்பீடு',
        'சமூக அணிதிரட்டல்',
        'மீட்பு திட்டங்கள்',
        'தங்குமிட மேலாண்மை',
        'மருத்துவ அவசரநிலை',
        'உணவு பாதுகாப்பு',
        'உளவியல் ஆதரவு'
      ],
      skillDevelopment: [
        'தொழில்நுட்ப பயிற்சி',
        'மென்மையான திறன்கள்',
        'கணினி பயிற்சி',
        'கைவினைப்பொருட்கள்',
        'தொழில் முனைவோர்',
        'வேலை வாய்ப்பு',
        'சான்றிதழ் திட்டங்கள்',
        'தொழில் கூட்டாண்மை',
        'தொழில் ஆலோசனை',
        'நிதி கல்வியறிவு',
        'புத்தாக்க ஆய்வகங்கள்'
      ]
    }
  };

  const domains = [
    {
      title: t('education'),
      icon: '📚',
      description: t('educationDesc'),
      key: 'education'
    },
    {
      title: t('healthcare'),
      icon: '🏥',
      description: t('healthcareDesc'),
      key: 'healthcare'
    },
    {
      title: t('environment'),
      icon: '🌱',
      description: t('environmentDesc'),
      key: 'environment'
    },
    {
      title: t('womenEmpowerment'),
      icon: '👩',
      description: t('womenEmpowermentDesc'),
      key: 'womenEmpowerment'
    },
    {
      title: t('ruralDevelopment'),
      icon: '🏘️',
      description: t('ruralDevelopmentDesc'),
      key: 'ruralDevelopment'
    },
    {
      title: t('childWelfare'),
      icon: '👶',
      description: t('childWelfareDesc'),
      key: 'childWelfare'
    },
    {
      title: t('elderlyCare'),
      icon: '👴',
      description: t('elderlyCareDesc'),
      key: 'elderlyCare'
    },
    {
      title: t('disasterRelief'),
      icon: '🆘',
      description: t('disasterReliefDesc'),
      key: 'disasterRelief'
    },
    {
      title: t('skillDevelopment'),
      icon: '🛠️',
      description: t('skillDevelopmentDesc'),
      key: 'skillDevelopment'
    }
  ];

  const handleDomainClick = (domain: typeof domains[0]) => {
    const departments = departmentTranslations[language][domain.key as keyof typeof departmentTranslations.english];
    setSelectedDomain({
      title: domain.title,
      departments: departments
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl mb-8">{t('heroSubtitle')}</p>
          <p className="text-lg max-w-2xl mx-auto">
            {t('heroDescription')}
          </p>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{t('domainsTitle')}</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('domainsSubtitle')}
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
              <h2 className="text-3xl font-bold text-emerald-600 mb-6">{t('ourVision')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('visionText')}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-teal-50 rounded-lg p-8 border border-teal-200">
              <h2 className="text-3xl font-bold text-teal-600 mb-6">{t('ourMission')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('missionText')}
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
