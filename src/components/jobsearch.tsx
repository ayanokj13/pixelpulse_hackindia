import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import footer from "../components/footer"; // Import Footer Component

export default function JobSearchUI() {
  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-blue-50 p-6">
    {/* Tailwind Test */}
    <h1 className="text-red-500">If this is red, Tailwind is working!</h1>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
          HUNTER
        </h1>
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/jobs")}>Jobs</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/employers")}>Employers</li>
          <li className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/contact")}>Contact</li>
        </ul>
        <div className="space-x-4">
          <button className="text-blue-600 hover:underline" onClick={() => navigate("/login")}>Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-lg">
          <p className="text-gray-600">
            We Have <span className="text-blue-600 font-bold">2756+</span> Open Positions
          </p>
          <h1 className="text-4xl font-bold mt-2">
            Find The <span className="text-blue-600">Job</span> That Suits Your Life
          </h1>
          <p className="text-gray-600 mt-4">
            Find your perfect job with ease. Our platform provides a seamless experience to grow in your career.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col md:flex-row bg-white p-3 rounded-lg shadow-md space-y-3 md:space-y-0 md:space-x-3">
            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full md:w-auto">
              <FaSearch className="text-gray-400" />
              <input type="text" placeholder="Job title" className="bg-transparent outline-none w-full" />
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full md:w-auto">
              <FaMapMarkerAlt className="text-gray-400" />
              <select className="bg-transparent outline-none w-full">
                <option>Location</option>
                <option>Remote</option>
                <option>New York</option>
              </select>
            </div>
            <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Search</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 md:mt-0">
          <img src="src/components/hero-image.jpg" alt="hero" className="w-80 rounded-lg shadow-lg" />
          <div className="absolute top-5 left-5 bg-white p-2 shadow-lg rounded-lg">
            <p className="text-sm font-semibold">2K+ Vacancies</p>
          </div>
          <div className="absolute bottom-5 left-5 bg-white p-2 shadow-lg rounded-lg">
            <p className="text-sm font-semibold">Product Designer (5 Years)</p>
          </div>
          <div className="absolute top-5 right-5 bg-white p-2 shadow-lg rounded-lg">
            <p className="text-sm font-semibold">⭐ 4.8 Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="flex justify-center space-x-10 mt-10">
        <p className="text-green-600 font-semibold">Upwork</p>
        <p className="text-black font-semibold">fiverr.</p>
        <p className="text-black font-semibold">Behance</p>
        <p className="text-blue-600 font-semibold">Google</p>
        <p className="text-blue-800 font-semibold">LinkedIn</p>
      </div>

      <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Find Your Dream Job</h1>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => navigate("/jobs")}
      >
        Search Jobs
      </button>
    </div>

      <div className="min-h-screen bg-blue-50 p-6">
      {/* Your existing UI components */}

      <footer /> {/* ✅ Footer should render here */}
    </div>


    </div>

  );
  
}
