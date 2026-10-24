"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import GithubGraph from "@/components/Github/GithubGraph";
import { motion } from "motion/react";
import ContactButton from "@/components/ui/contact-button";

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
    url: "https://drive.google.com/file/d/1ud42VwVsxRU00Ejw-zAwkVrk9OlQlRze/view?usp=sharing",
  },
];

const Contact = () => {
  return (
    <motion.section className="relative w-full overflow-hidden px-6 md:px-10 pt-4 pb-10" id="contact"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: "easeOut"}}>
      
      <h2 className="w-full text-2xl md:text-3xl font-bold text-blue-300">Contact</h2>
      <div className="flex justify-between gap-2 w-full pt-4 pb-8 px-2 md:px-0">

        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer" className="w-full">
            <ContactButton>
              {item.icon}
              <span className="hidden md:block">{item.text}</span>
            </ContactButton> 
          </a>
        ))}

      </div>

      <GithubGraph />
    </motion.section>
  )
}

export default Contact
