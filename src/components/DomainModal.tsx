
import { X } from 'lucide-react';

interface DomainModalProps {
  isOpen: boolean;
  onClose: () => void;
  domainTitle: string;
  departments: string[];
}

const DomainModal = ({ isOpen, onClose, domainTitle, departments }: DomainModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{domainTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-emerald-600">Departments:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 hover:bg-emerald-100 transition-colors duration-200"
              >
                <span className="text-gray-800 font-medium">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainModal;
