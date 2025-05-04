import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="pt-16">
      <div className="flex flex-col text-center md:flex-row justify-between items-center h-screen p-4 overflow-hidden">
        {/* Swiper Image Slider */}
        <div
          className="w-full md:w-1/2 h-115 overflow-hidden relative"
          data-aos="fade-right" // AOS animation
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            navigation
            className="h-full rounded-lg shadow-lg"
          >
            {[...Array(5)].map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  src="/main.jpg"
                  alt={`slide-${i}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom arrow styles */}
          <style jsx="true">{`
            .swiper-button-prev,
            .swiper-button-next {
              color: #8b4513;
              transform: scale(1);
              transition: transform 0.3s ease;
            }
            .swiper-button-prev:hover,
            .swiper-button-next:hover {
              transform: scale(1.5);
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 1.5rem;
              font-weight: bold;
            }
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background-color: #5c3317; /* Darker brown for active */
            }
          `}</style>
        </div>

        {/* Right side content */}
        <div
          className="w-full md:w-2/3 flex flex-col justify-center items-center p-6"
          data-aos="fade-up" // AOS animation
          data-aos-delay="500" // Optional delay for staggered effect
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-[#8B4513] mb-4 md:mb-8">
            Hi, I'm Miaka
          </h1>
          <p className="text-xl md:text-4xl font-extrabold text-[#8B4513] mb-4">
            🤎
          </p>
          <p className="text-2xl md:text-4xl font-extrabold text-[#8B4513]">
            {""}
            <Typewriter
              words={[
                "Watching movies",
                "Reading",
                "Listening to music",
                "Traveling",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
