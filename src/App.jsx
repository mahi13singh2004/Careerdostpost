import React, { useState } from 'react';
import './App.css'; 

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800 p-4 shadow-lg flex items-center justify-between relative">
      {/* Left Side */}
      <div className="text-white text-3xl font-extrabold animate-pulse">Welcome User</div>
      
      {/* Center Content */}
      <div className="p-1 text-white text-3xl font-semibold bounce-animation">
        Careerदोस्त
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4 relative">
        {/* Profile Text */}
        <button 
          onClick={toggleDropdown} 
          className="text-white text-xl font-semibold focus:outline-none"
        >
          Sign out
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg z-20">
            <a href="#update" className="block px-4 py-2 hover:bg-gray-100">Notifications</a>
            <a href="#logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};
const Card = ({ title, section, imageUrl }) => (
  <div className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer animate-fadeIn">
    <a href={`#${section}`} className="block">
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-blue-600 text-lg font-medium">View {title}</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="text-center text-white p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-lg">View {title}</p>
        </div>
      </div>
    </a>
  </div>
);

const Home = () => (
  <div className="p-8 text-center text-white">
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Card title="Resources" section="resources" imageUrl="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card title="College Info" section="college-info" imageUrl="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card title="MNT Connect" section="mnto-connect" imageUrl="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
    </div>
    <div className="flex justify-center mt-16"> {/* Add margin-top to push content down */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-md">
        <Card title="Interactive Quizzes" section="college-rankings" imageUrl="https://img.freepik.com/free-vector/modern-teamwork-concept-with-flat-design_23-2147852841.jpg?size=626&ext=jpg&ga=GA1.1.72212417.1724431325&semt=ais_hybrid" />
        <Card title="Examinations" section="emerging-trends" imageUrl="https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
    </div>
  </div>
);


const Section = ({ section }) => {
  switch (section) {
    case 'resources':
      return <div className="p-8 text-white animate-fadeIn">Resources Page</div>;
    case 'college-info':
      return <div className="p-8 text-white animate-fadeIn">College Info Page</div>;
    case 'mnto-connect':
      return <div className="p-8 text-white animate-fadeIn">MNT Connect Page</div>;
    case 'college-rankings':
      return <div className="p-8 text-white animate-fadeIn">College Rankings Page</div>;
    case 'emerging-trends':
      return <div className="p-8 text-white animate-fadeIn">Emerging Market Trends Page</div>;
    default:
      return <Home />;
  }
};

const Chatbot = () => (
  <div className="fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-bounce">
    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-300">
      <i className="fas fa-robot text-green-600 text-xl"></i> {/* Font Awesome robot icon */}
    </button>
  </div>
);

const App = () => {
  const [section, setSection] = useState('home');

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 min-h-screen">
      <Navbar />
      <Section section={section} />
      <Chatbot />
    </div>
  );
};

export default App;
