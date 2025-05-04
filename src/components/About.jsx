import { TbBallTennis, TbIceSkating, TbPlane, TbMusic } from "react-icons/tb";
import { CiCoffeeCup } from "react-icons/ci";
import {
  GiHamburger,
  GiFrenchFries,
  GiSteak,
  GiCoffeeCup,
} from "react-icons/gi";
import Marquee from "react-fast-marquee";

const hobbies = [
  {
    name: "Tennis",
    component: <TbBallTennis size={30} />,
  },
  {
    name: "Ice Skating",
    component: <TbIceSkating size={30} />,
  },
  {
    name: "Traveling",
    component: <TbPlane size={30} />,
  },
  {
    name: "Listening to Music",
    component: <TbMusic size={30} />,
  },
];

const foods = [
  {
    name: "Burger",
    component: <GiHamburger size={30} />,
  },
  {
    name: "Fries",
    component: <GiFrenchFries size={30} />,
  },
  {
    name: "Steak",
    component: <GiSteak size={30} />,
  },
  {
    name: "Milktea",
    component: <CiCoffeeCup size={30} />, // you can replace with a milk tea icon if available
  },
  {
    name: "Coffee",
    component: <GiCoffeeCup size={30} />,
  },
];

const About = () => {
  return (
    <section id="about" className="pt-16 min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-8 text-center">
          About Me
        </h2>

        {/* Hobbies Marquee */}
        <h3 className="text-xl md:text-2xl font-bold text-[#8B4513] mb-4">
          Hobbies
        </h3>
        <Marquee speed={50} gradient={false} autoFill pauseOnHover>
          {hobbies.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-[#8B4513] mx-2 sm:mx-4 gap-1 sm:gap-2 w-auto h-20 sm:h-28 p-1 sm:p-4"
            >
              {item.component}
              <span className="text-sm md:text-lg font-bold text-center">
                {item.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Favorite Foods Marquee */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#8B4513] mb-4">
          Favorite Foods
        </h3>
        <Marquee
          speed={50}
          gradient={false}
          autoFill
          pauseOnHover
          direction="right"
        >
          {foods.map((food, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-[#8B4513] mx-2 sm:mx-4 gap-1 sm:gap-2 w-auto h-20 sm:h-28 p-1 sm:p-4"
            >
              {food.component}
              <span className="text-sm md:text-lg font-bold text-center">
                {food.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default About;
