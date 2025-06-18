
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Community Health Camp',
      date: '2024-07-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Nallore Village Center',
      description: 'Free health checkups and medical consultations for all community members.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Environmental Awareness Workshop',
      date: '2024-07-20',
      time: '10:00 AM - 2:00 PM',
      location: 'Community Hall',
      description: 'Learning about sustainable practices and environmental conservation.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Women Empowerment Seminar',
      date: '2024-07-25',
      time: '11:00 AM - 4:00 PM',
      location: 'District Center',
      description: 'Empowering women through skill development and entrepreneurship training.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Tree Plantation Drive',
      date: '2024-08-01',
      time: '6:00 AM - 10:00 AM',
      location: 'Village Outskirts',
      description: 'Community tree plantation initiative for a greener tomorrow.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl">Join us in our community development initiatives</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to Organize an Event?</h2>
          <p className="text-lg text-gray-600 mb-6">Get in touch with us to organize community events</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
