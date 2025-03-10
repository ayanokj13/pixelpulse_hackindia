import { useNavigate } from "react-router-dom";

const jobs = [
  { title: "Web Designer", icon: "linkedin", experience: "2 years" },
  { title: "Graphic Designer", icon: "facebook", experience: "2 years" },
  { title: "Ui/Ux Designer", icon: "google", experience: "2 years" },
  { title: "Content Writer", icon: "default", experience: "2 years" },
  { title: "Product Manager", icon: "default", experience: "2 years" },
  { title: "Programmer", icon: "twitter", experience: "2 years" },
];

const JobListing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Jobs For You</h2>
      <p className="text-gray-600 mb-6">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              {job.icon === "linkedin" && <span className="text-blue-700 text-2xl">🔗</span>}
              {job.icon === "facebook" && <span className="text-blue-600 text-2xl">📘</span>}
              {job.icon === "google" && <span className="text-red-500 text-2xl">🌐</span>}
              {job.icon === "twitter" && <span className="text-blue-400 text-2xl">🐦</span>}
              <h3 className="text-xl font-semibold">{job.title}</h3>
            </div>
            <p className="text-gray-600">📍 Sukkur, Sindh</p>
            <p className="text-gray-700 font-medium">Experience: {job.experience}</p>
            <p className="text-gray-500 text-sm my-2">
              It is a long established fact that a reader is distracted by the readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-2 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View Job
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        className="mt-8 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
        onClick={() => navigate("/")}
      >
        Back to Search
      </button>
    </div>
  );
};

export default JobListing;
