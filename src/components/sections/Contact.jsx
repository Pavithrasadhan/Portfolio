import { RevealOnScroll } from "../RevealOnScroll";
import 'font-awesome/css/font-awesome.min.css';


export const Contact = () => {
  return (
    <section className="contact min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="container">
          <h1 className="text-center mb-4">Contact Me</h1>
          <p className="text-center mb-4">
            Thank you for visiting my portfolio! I’m Pavithra, a passionate full stack developer eager to create engaging and user-friendly web experiences. If you have any questions, project inquiries, or just want to connect, feel free to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
    <div className="text-center">
        <a href="mailto:pavithrasai9398@gmail.com" className="contact-link">
            <i className="fa fa-envelope" style={{ fontSize: 30 }}></i>
        </a>
    </div>
    <div className="text-center">
        <a href="https://www.linkedin.com/in/pavithrasadhan" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" style={{ fontSize: 30 }}></i>
        </a>
    </div>
    <div className="text-center">
        <a href="https://github.com/pavithrasadhan" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" style={{ fontSize: 30 }}></i>
        </a>
    </div>
    <div className="text-center">
        <a href="https://wa.me/0559419983" className="contact-link" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp" style={{ fontSize: 30 }}></i>
        </a>
    </div>
</div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
