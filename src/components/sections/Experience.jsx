import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Column 1 */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Full Stack Developer at Kuntec Online Services Pvt. Ltd. (2023 - Present)
                  </h4><br />
                  <p>
                    Designed and developed scalable web applications using React.js, Node.js, and MongoDB, 
                    reducing query response time by 30%. Optimized RESTful APIs to enhance data exchange 
                    efficiency between front-end and back-end systems. Implemented a scalable database 
                    structure, improving system performance and user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Developer (Fresher) at Accenture (2019 - 2020)
                  </h4><br />
                  <p>
                    Collaborated with senior developers to debug and enhance web applications, improving 
                    performance by 20%. Gained hands-on experience with modern development tools and 
                    technologies, contributing to scalable software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};