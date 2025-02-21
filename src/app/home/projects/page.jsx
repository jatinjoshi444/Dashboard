const projects = [
    {
      id: 1,
      name: "To-Do List App",
      description: "A simple task manager with add, delete, and complete functionality.",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      id: 2,
      name: "Weather App",
      description: "Displays weather information for a given city.",
      techStack: ["React", "API Integration"],
    },
    {
      id: 3,
      name: "Expense Tracker",
      description: "Track your daily expenses with this simple tracker app.",
      techStack: ["React", "LocalStorage"],
    },
    {
      id: 4,
      name: "Chat App",
      description: "A real-time chat application using Firebase.",
      techStack: ["React", "Firebase"],
    },
    {
      id: 5,
      name: "Portfolio Website",
      description: "A personal portfolio showcasing projects and skills.",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      id: 6,
      name: "E-Commerce Store",
      description: "A dummy online store with a product catalog and cart.",
      techStack: ["React", "Redux", "Stripe"],
    },
  ];
  

const DashboardPage = () => {

    return (
        <div className="flex w-full flex-col items-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default DashboardPage;