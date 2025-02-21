const groupMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Backend Developer",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Charlie Brown",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "David Williams",
      role: "Project Manager",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Emma Davis",
      role: "QA Engineer",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];
  

const page = () => {
  return (
    <div className="flex flex-col w-full items-center min-h-screen  p-6">
      <h1 className="text-3xl font-bold mb-4">Group Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {groupMembers.map((member) => (
          <div key={member.id} className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
            <img className="w-16 h-16 rounded-full border-2 border-gray-300" src={member.avatar} alt={member.name} />
            <div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page;