const page = () => {
    return (
      <div className="h-screen mt-20 m-auto text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
  
      {/* Profile Settings */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
        <div className="flex flex-col space-y-4">
          <label>
            Name:
            <input type="text" className="border p-2 rounded w-full mt-1" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" className="border p-2 rounded w-full mt-1" placeholder="Enter your email" />
          </label>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
  
      {/* Preferences */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
        <p>Choose your preferred language:</p>
        <select className="border p-2 rounded w-full mt-2">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>
    </div>
    )
  }
  
  export default page