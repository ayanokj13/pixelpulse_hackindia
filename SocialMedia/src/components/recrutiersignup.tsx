import { useNavigate } from "react-router-dom";

export default function RecruiterSignup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Recruiter Signup</h1>
        <form className="space-y-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Contact Info Input */}
          <input
            type="text"
            placeholder="Contact Info (e.g., Phone Number)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login Option */}
        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <span
            className="text-green-600 cursor-pointer hover:underline"
            onClick={() => navigate("/recruiterlog")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
