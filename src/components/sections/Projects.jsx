import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Learning Management System (LMS) - SaaS-Based eLearning Platform </h3>
              <p className="text-gray-400 mb-4">
              Developed a full-fledged LMS enabling users to enroll in courses, track progress, and take quizzes. Integrated video streaming, assignment submission, and certificate generation features. Implemented an admin panel for course creation, user management, and revenue analytics. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
            <div
  className="
    glass p-6 rounded-xl border border-white/10 
    hover:-translate-y-1 hover:border-blue-500/30
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
    transition-all
  "
>
  <h3 className="text-xl font-bold mb-2">Real Estate Management Platform (MERN Stack)</h3>
  <p className="text-gray-400 mb-4">
    Built a comprehensive platform for real estate management with features like user authentication, property management, and secure ownership transfers. Created RESTful APIs for CRUD operations on properties and implemented real-time updates for user roles (Owner, Agent, Buyer).
  </p>
  <div className="flex flex-wrap gap-2 mb-4">
    {["React", "Express", "Node", "MongoDB"].map((tech, key) => (
      <span
        key={key}
        className="
          bg-blue-500/10 text-blue-500 py-1 px-3 
          rounded-full text-sm
          transition
          hover:bg-blue-500/20 hover:-translate-y-0.5
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
        "
      >
        {tech}
      </span>
    ))}
  </div>

  <a
    href="https://real-estate-eta-steel.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block mt-4 px-6 py-2 bg-blue-500 text-white 
      rounded-lg hover:bg-blue-600 transition-all
      hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)]
    "
  >
    Live Demo
  </a>
</div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Online Shopping Portal</h3>
              <p className="text-gray-400 mb-4">
              Created a multi-vendor e-commerce website with real-time product listings, order tracking, and payment integration. Implemented dynamic search filters, AI-based product recommendations, and an admin analytics dashboard. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
    
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Crime Report Management System</h3>
              <p className="text-gray-400 mb-4">
              Developed a web-based platform for crime reporting and case management. Enabled users to securely report crimes, track case progress, and receive real-time updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "Node", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
        
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};