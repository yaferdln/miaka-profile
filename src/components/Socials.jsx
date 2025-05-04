import { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profile.php?id=100084507653654",
    color: "#1877F2",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/yourname",
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/yourname",
    color: "#E1306C",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://tiktok.com/@yourname",
    color: "#000000",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    url: "https://t.me/yourname",
    color: "#0088cc",
  },
];

const Socials = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section
      id="socials"
      className="min-h-screen flex flex-col items-center justify-center text-[#8B4513] px-4"
    >
      <h1
        className="text-3xl md:text-4xl font-bold mb-8 neon-title"
        data-aos="fade-up"
      >
        Let's Connect
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-5xl transition-transform duration-300 hover:scale-110"
            style={{
              color: social.color,
            }}
            data-aos="zoom-in" // AOS animation for each social icon
            data-aos-delay={i * 100} // Optional delay for staggered effect
          >
            {social.icon}
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;
