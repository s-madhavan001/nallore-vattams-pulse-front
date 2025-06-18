
interface DomainBoxProps {
  title: string;
  icon: string;
  description: string;
  onClick: () => void;
}

const DomainBox = ({ title, icon, description, onClick }: DomainBoxProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200 p-6"
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DomainBox;
