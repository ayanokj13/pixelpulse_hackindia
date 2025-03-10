
import { useState } from "react";

const jobCategories = [
  { title: "UI/UX Designer", positions: 67, icon: "UX", active: true },
  { title: "Content Writer", positions: 67, icon: "📝" },
  { title: "Programmer", positions: 700, icon: "⚙️" },
  { title: "Product Manager", positions: 67, icon: "📊" },
  { title: "Data Analyst", positions: 67
    , icon: "📈" },
  { title: "Photographer", positions: 67, icon: "📷" },
];

export default function JobCategories() {
  const [selected, setSelected] = useState("UI/UX Designer");

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Popular Job Categories</h2>
      <p className="text-gray-500 text-center mt-2">
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {jobCategories.map((job) => (
          <div
            key={job.title}
            onClick={() => setSelected(job.title)}
            className={`flex items-center p-4 rounded-lg cursor-pointer border
            ${selected === job.title ? "bg-green-500 text-white" : "bg-white border-gray-200"}
            shadow-md transition-all`}
          >
            <div className="text-2xl bg-white p-2 rounded-md">{job.icon}</div>
            <div className="ml-4">
              <h3 className="font-semibold">{job.title}</h3>
              <p className={`${selected === job.title ? "text-white" : "text-gray-500"}`}>
                {job.positions} Open Positions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
