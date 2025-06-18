
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'english' | 'tamil';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  english: {
    // Header
    home: 'Home',
    events: 'Events',
    gallery: 'Gallery',
    about: 'About',
    login: 'Login',
    
    // Home page
    heroTitle: 'NALLORE VATTAM',
    heroSubtitle: 'Empowering Communities, Transforming Lives',
    heroDescription: 'Dedicated to creating positive change in society through sustainable development, community empowerment, and social welfare initiatives.',
    
    // Domains section
    domainsTitle: 'Our Domains',
    domainsSubtitle: 'Click on any domain to explore our departments and services',
    
    // Domain titles
    education: 'Education',
    healthcare: 'Healthcare',
    environment: 'Environment',
    womenEmpowerment: 'Women Empowerment',
    ruralDevelopment: 'Rural Development',
    childWelfare: 'Child Welfare',
    elderlyCare: 'Elderly Care',
    disasterRelief: 'Disaster Relief',
    skillDevelopment: 'Skill Development',
    
    // Domain descriptions
    educationDesc: 'Empowering communities through quality education',
    healthcareDesc: 'Providing accessible healthcare services',
    environmentDesc: 'Protecting and preserving our environment',
    womenEmpowermentDesc: 'Promoting gender equality and women rights',
    ruralDevelopmentDesc: 'Improving rural infrastructure and livelihoods',
    childWelfareDesc: 'Ensuring child rights and protection',
    elderlyCareDesc: 'Supporting senior citizens and elderly care',
    disasterReliefDesc: 'Emergency response and disaster management',
    skillDevelopmentDesc: 'Building skills for better employment opportunities',
    
    // Vision & Mission
    ourVision: 'Our Vision',
    ourMission: 'Our Mission',
    visionText: 'To create a society where every individual has equal opportunities for growth and development, where communities are self-reliant and sustainable, and where social justice and harmony prevail. We envision a world free from poverty, inequality, and discrimination.',
    missionText: 'To empower marginalized communities through comprehensive development programs, advocacy for human rights, and sustainable initiatives that address education, healthcare, environment, and social welfare. We are committed to building a just and equitable society through collaborative efforts.',
    
    // Modal
    departments: 'Departments'
  },
  tamil: {
    // Header
    home: 'முகப்பு',
    events: 'நிகழ்வுகள்',
    gallery: 'படக்காட்சி',
    about: 'எங்களைப் பற்றி',
    login: 'உள்நுழைவு',
    
    // Home page
    heroTitle: 'நல்லூர் வட்டம்',
    heroSubtitle: 'சமூகங்களை வலுப்படுத்துதல், வாழ்வுகளை மாற்றுதல்',
    heroDescription: 'நிலையான வளர்ச்சி, சமூக வலுவூட்டல் மற்றும் சமூக நல்வாழ்வு முயற்சிகள் மூலம் சமூகத்தில் நேர்மறையான மாற்றத்தை உருவாக்குவதில் அர்ப்பணிப்புடன் உள்ளோம்.',
    
    // Domains section
    domainsTitle: 'எங்கள் துறைகள்',
    domainsSubtitle: 'எங்கள் துறைகள் மற்றும் சேவைகளை ஆராய எந்த துறையிலும் கிளிக் செய்யுங்கள்',
    
    // Domain titles
    education: 'கல்வி',
    healthcare: 'சுகாதாரம்',
    environment: 'சுற்றுச்சூழல்',
    womenEmpowerment: 'பெண்கள் வலுவூட்டல்',
    ruralDevelopment: 'கிராமிய வளர்ச்சி',
    childWelfare: 'குழந்தைகள் நலம்',
    elderlyCare: 'முதியோர் பராமரிப்பு',
    disasterRelief: 'பேரிடர் நிவாரணம்',
    skillDevelopment: 'திறன் மேம்பாடு',
    
    // Domain descriptions
    educationDesc: 'தரமான கல்வி மூலம் சமூகங்களை வலுப்படுத்துதல்',
    healthcareDesc: 'அணுகக்கூடிய சுகாதார சேவைகளை வழங்குதல்',
    environmentDesc: 'எங்கள் சுற்றுச்சூழலைப் பாதுகாத்தல் மற்றும் பராமரித்தல்',
    womenEmpowermentDesc: 'பாலின சமத்துவம் மற்றும் பெண்கள் உரிமைகளை ஊக்குவித்தல்',
    ruralDevelopmentDesc: 'கிராமிய உள்கட்டமைப்பு மற்றும் வாழ்வாதாரத்தை மேம்படுத்துதல்',
    childWelfareDesc: 'குழந்தைகளின் உரிமைகள் மற்றும் பாதுகாப்பை உறுதி செய்தல்',
    elderlyCareDesc: 'மூத்த குடிமக்கள் மற்றும் முதியோர் பராமரிப்பை ஆதரித்தல்',
    disasterReliefDesc: 'அவசர நிலை மறுமொழி மற்றும் பேரிடர் மேலாண்மை',
    skillDevelopmentDesc: 'சிறந்த வேலைவாய்ப்பு வாய்ப்புகளுக்கான திறன்களை வளர்த்தல்',
    
    // Vision & Mission
    ourVision: 'எங்கள் தொலைநோக்கு',
    ourMission: 'எங்கள் நோக்கம்',
    visionText: 'ஒவ்வொரு தனிநபருக்கும் வளர்ச்சி மற்றும் மேம்பாட்டிற்கான சம வாய்ப்புகள் உள்ள, சமூகங்கள் தன்னிறைவு மற்றும் நிலையானவையாக இருக்கும், மற்றும் சமூக நீதி மற்றும் நல்லிணக்கம் நிலவும் ஒரு சமூகத்தை உருவாக்குவது. வறுமை, சமத்துவமின்மை மற்றும் பாகுபாடு இல்லாத உலகத்தை நாங்கள் கண்ணியத்துடன் காண்கிறோம்.',
    missionText: 'கல்வி, சுகாதாரம், சுற்றுச்சூழல் மற்றும் சமூக நலன்களை உள்ளடக்கிய விரிவான வளர்ச்சி திட்டங்கள், மனித உரிமைகளுக்கான வாதத்துடன் மற்றும் நிலையான முயற்சிகள் மூலம் ஒதுக்கப்பட்ட சமூகங்களை வலுப்படுத்துவது. ஒத்துழைப்பு முயற்சிகள் மூலம் நீதியான மற்றும் சமத்துவமான சமூகத்தை உருவாக்குவதில் நாங்கள் அர்ப்பணிப்புடன் உள்ளோம்.',
    
    // Modal
    departments: 'துறைகள்'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'tamil' : 'english');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.english] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
