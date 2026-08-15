import CornerButton from "@/components/ui/corner-button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const connectHandle = [
  {
    icon: <FaXTwitter />,
    title: "X",
    url: "https://x.com/holyarsenic",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    url: "https://github.com/holyarsenic",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    url: "mailto:rohankamat7986@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rohankt4/",
  },
];

const connect = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 md:px-10 py-10">
      <h2 className="w-full text-2xl md:text-3xl font-bold text-blue-300 mb-10">Work with me</h2>  
        
        <div className="w-full pt-4 px-0 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Have a project{' '}
            <span className="text-xl md:text-2xl text-gray-400 dark:text-gray-500">in mind?</span>
          </h2>

        <div className="w-full">
          <div>
            <p className="text-base text-gray-500 dark:text-gray-400 md:text-base">
              Feel free to reach out through any of these platforms. Whether
              you have an idea, a project, or just want to connect, I&apos;d love
              to hear from you.
            </p>
          </div>

          <div className="flex w-full justify-center py-2 px-10 md:px-0">
            {connectHandle.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <CornerButton
                  icon={item.icon}
                  accentColor="#93C5FD"
                >
                  <span className="hidden md:block">{item.title}</span>
                </CornerButton>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default connect;