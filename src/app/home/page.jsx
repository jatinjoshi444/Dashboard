import React from "react";

const page = () => {
  const user = {
    name: "Sahu",
    role: "Software Engineer",
    email: "Sahu@gmail.com",
    location: "Delhi,India",
    active: true,
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-2xl p-10 w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-5 rounded-2xl">
        <div className="flex items-center space-x-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-2xl text-gray-500">{user.role}</p>
          </div>
        </div>
        <div className="mt-6 text-gray-600 text-xl">
          <p>
            Email:{" "}
            <span className="font-medium text-gray-800">{user.email}</span>
          </p>
          <p>
            Location:{" "}
            <span className="font-medium text-gray-800">{user.location}</span>
          </p>
          <p>
            Status:{" "}
            <span
              className={`font-medium ${
                user.active ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.active ? "Active" : "Inactive"}
            </span>
          </p>
        </div>
        <div className="mt-6 flex space-x-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600">
            View Profile
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-xl hover:bg-gray-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
