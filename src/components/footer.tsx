import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-12">
      <p>&copy; 2025 HUNTER. All rights reserved.</p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => navigate("/next-page")} // ✅ Navigates to next page
      >
        Next Page
      </button>
    </footer>
  );
};

export default Footer;
