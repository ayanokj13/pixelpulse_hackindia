export default function Navbar() { 
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-blue-600">HUNTER</h1>
      <ul className="flex space-x-6 text-gray-600">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Jobs</li>
        <li className="cursor-pointer">Employers</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="space-x-4">
        <button className="text-blue-600">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Register</button>
      </div>
    </nav>
  );
}

  

  