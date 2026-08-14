import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import GithubGraph from "@/components/Github/GithubGraph";

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
    <section className="relative w-full overflow-hidden px-4 md:px-10 py-4" id="contact">
      <h2 className="w-full text-2xl md:text-3xl font-bold text-blue-300">Contact</h2>
      <div className="flex justify-between gap-3 w-full py-4 px-2 md:px-0">

        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 border border-gray-500 hover:border-blue-300 p-2 w-full justify-center transition-colors duration-300"
          >
            {item.icon}
            <span className="hidden md:block">{item.text}</span>
          </a>
        ))}

      </div>

      <GithubGraph />
    </section>
  )
}

export default Contact
