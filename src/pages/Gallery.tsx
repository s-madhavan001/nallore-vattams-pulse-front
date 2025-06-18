
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop',
      title: 'Community Health Camp',
      category: 'Healthcare'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      title: 'Tree Plantation Drive',
      category: 'Environment'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      title: 'Education Workshop',
      category: 'Education'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
      title: 'Women Empowerment Session',
      category: 'Women Empowerment'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
      title: 'Skill Development Training',
      category: 'Skill Development'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Rural Development Project',
      category: 'Rural Development'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1586025117728-88ebad83c9d7?w=400&h=300&fit=crop',
      title: 'Child Welfare Program',
      category: 'Child Welfare'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1594736797933-d0d9bfc71571?w=400&h=300&fit=crop',
      title: 'Elderly Care Initiative',
      category: 'Elderly Care'
    }
  ];

  const categories = ['All', 'Healthcare', 'Environment', 'Education', 'Women Empowerment', 'Skill Development', 'Rural Development', 'Child Welfare', 'Elderly Care'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Capturing moments of positive change and community impact</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                  <p className="text-sm text-purple-600">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
