
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-emerald-100 hover:bg-emerald-200 transition-colors duration-200 text-emerald-700 font-medium"
    >
      <Globe size={18} />
      <span className="text-sm">
        {language === 'english' ? 'தமிழ்' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;
