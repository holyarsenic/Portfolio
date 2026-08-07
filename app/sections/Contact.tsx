import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

const contactItems = [
  { icon: <FaGithub />, 
    text: "Github", 
    url: "https://github.com/holyarsenic" },
  {
    icon: <FaLinkedin />,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/rohankt4/",
  },
  { 
    icon: <FaXTwitter />, 
    text: "Twitter", 
    url: "https://x.com/holyarsenic" },
  {
    icon: <FaEnvelope />,
    text: "Email",
    url: "mailto:rohankamat7986@gmail.com",
  },
  {
    icon: <GrDocumentText />,
    text: "Resume",
    url: "",
  },
];

const Contact = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl px-10">
      <h2 className="text-2xl">Contact</h2>
      <div className="flex justify-between gap-3 w-full p-3">

        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-blue-300 border border-gray-700 hover:border-blue-300 p-2 w-full justify-center transition-colors duration-300"
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}

      </div>
    </section>
  )
}

export default Contact
