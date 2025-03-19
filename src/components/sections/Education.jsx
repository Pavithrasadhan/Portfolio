import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  
    return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Education and Certificate
          </h2>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> M.Sc. in Computer Science </strong> - Annamalai University (2021-2023)
                </li>

              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Sc. in Computer Science </strong> - Sadakathullah Appa College (2015-2018)
                </li>

              </ul>
            </div>
          
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6"> 🏫 Certificate </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Full Stack Development (Edoxi - Dubai) | Oct 2024 – Mar 2025 </strong>
                </li>

              </ul>
              <a
    href="https://certification.edoxi.com/24851"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block mt-4 px-6 py-2 bg-blue-500 text-white 
      rounded-lg hover:bg-blue-600 transition-all
      hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)]
    "
  >
    view certificate
  </a>
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};