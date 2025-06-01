import { useEffect } from "react";
import { TbBallTennis, TbIceSkating, TbPlane, TbMusic } from "react-icons/tb";
import { CiCoffeeCup } from "react-icons/ci";
import {
  GiHamburger,
  GiFrenchFries,
  GiSteak,
  GiCoffeeCup,
} from "react-icons/gi";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const hobbies = [
  { name: "Tennis", component: <TbBallTennis size={30} /> },
  { name: "Ice Skating", component: <TbIceSkating size={30} /> },
  { name: "Traveling", component: <TbPlane size={30} /> },
  { name: "Music", component: <TbMusic size={30} /> },
];

const foods = [
  { name: "Burger", component: <GiHamburger size={30} /> },
  { name: "Fries", component: <GiFrenchFries size={30} /> },
  { name: "Steak", component: <GiSteak size={30} /> },
  { name: "Milktea", component: <CiCoffeeCup size={30} /> },
  { name: "Coffee", component: <GiCoffeeCup size={30} /> },
];

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="pt-16 min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8 text-center"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* About Card */}
        <div
          className="bg-[#f5f1eb] border border-[#d6c6b5] rounded-2xl shadow-md p-6 md:p-8 mb-10 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-md sm:text-lg text-[#5A3B1D] mb-4 text-center">
            Miaka is my alter ego in this little corner of the roleplay world —
            a fun, outgoing, and daydreamy soul who lives life with a spark of
            creativity and curiosity. She's the version of me who isn't afraid
            to be playful, dramatic, or a little extra. Whether it's sipping
            coffee on a lazy afternoon, gliding on ice, or planning her next
            pretend getaway, Miaka brings color and emotion to everything she
            does.
          </p>
          <p className="text-md sm:text-lg text-[#5A3B1D] text-center">
            Behind Miaka is someone who enjoys expressing herself through
            hobbies, stories, and little moments of joy. This alter ego gives me
            space to explore different sides of myself — from the quiet,
            music-loving introvert to the bold, burger-loving adventurer.
            Roleplaying as Miaka isn’t just for fun — it’s a reminder that we
            can be whoever we want, even just for a while.
          </p>
        </div>

        {/* Hobbies */}
        <h3
          className="text-xl md:text-2xl font-bold text-[#8B4513] mb-4"
          data-aos="fade-up"
        >
          Hobbies
        </h3>
        <div className="h-36 overflow-hidden flex items-center mb-10">
          <Marquee
            speed={50}
            gradient={false}
            autoFill
            pauseOnHover
            className="flex items-center h-full w-full"
          >
            {hobbies.map((item, i) => (
              <div
                key={i}
                className="w-28 h-28 bg-[#F5F5DC] rounded-xl shadow-md flex flex-col items-center justify-center mx-3 text-[#8B4513] hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                {item.component}
                <span className="text-xs font-bold text-center mt-1">
                  {item.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Favorite Foods */}
        <h3
          className="text-xl sm:text-2xl font-bold text-[#8B4513] mb-4"
          data-aos="fade-up"
        >
          Favorite Foods
        </h3>
        <div className="h-36 overflow-hidden flex items-center">
          <Marquee
            speed={50}
            gradient={false}
            autoFill
            pauseOnHover
            direction="right"
            className="flex items-center w-full h-full"
          >
            {foods.map((food, i) => (
              <div
                key={i}
                className="w-28 h-28 bg-[#F5F5DC] rounded-xl shadow-md flex flex-col items-center justify-center mx-3 text-[#8B4513] hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                {food.component}
                <span className="text-xs font-bold text-center mt-1">
                  {food.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About;
