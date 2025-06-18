
import { Users, Heart, Target, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Leading community development initiatives for over 15 years'
    },
    {
      name: 'Priya Sharma',
      position: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop',
      bio: 'Expert in healthcare and women empowerment programs'
    },
    {
      name: 'Dr. Arun Patel',
      position: 'Health Coordinator',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
      bio: 'Medical professional dedicated to community health'
    },
    {
      name: 'Meera Devi',
      position: 'Education Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Passionate educator working for rural education development'
    }
  ];

  const achievements = [
    { icon: <Users className="text-blue-600" size={48} />, number: '50,000+', label: 'Lives Impacted' },
    { icon: <Heart className="text-red-600" size={48} />, number: '200+', label: 'Health Camps' },
    { icon: <Target className="text-green-600" size={48} />, number: '15', label: 'Active Projects' },
    { icon: <Award className="text-yellow-600" size={48} />, number: '25+', label: 'Awards Received' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Learn more about our journey and commitment to social change</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  NALLORE VATTAM was founded in 2008 with a simple yet powerful vision - to create 
                  sustainable change in rural communities through comprehensive development programs. 
                  What started as a small initiative in Nallore village has now grown into a 
                  recognized NGO impacting thousands of lives across multiple domains.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our journey began when a group of passionate individuals recognized the need for 
                  holistic development in underserved communities. Over the years, we have expanded 
                  our reach and refined our approach, always staying true to our core values of 
                  transparency, accountability, and community participation.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we operate across 9 key domains, running multiple programs that address 
                  the diverse needs of the communities we serve. Our work is guided by the belief 
                  that sustainable development is only possible when communities are empowered to 
                  drive their own change.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                  alt="Our team in action"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Transparency</h3>
              <p className="text-gray-700">
                We believe in open communication and accountability in all our operations and activities.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Community-Centric</h3>
              <p className="text-gray-700">
                Our programs are designed with and for the communities we serve, ensuring their active participation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We focus on creating long-term solutions that communities can maintain and expand upon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
