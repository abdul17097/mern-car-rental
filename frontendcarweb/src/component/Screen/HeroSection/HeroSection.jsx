import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <>
      <div className="relative lg:h-[80vh] font-sans pt-10 lg:pt-0 w-[100%] bg-[#F5F6F] flex lg:flex-row flex-col relative lg:bottom-20 px-5 lg:px-20 lg:items-center">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="lg:w-[80%] flex flex-col gap-5"
        >
          <h1 className="text-[20px] font-semibold ">
            Rent a car in <span className="text-[#E69A2B] ">Pakistan</span>{" "}
          </h1>
          <h2 className="lg:text-[60px] text-3xl leading-[65px] w-[100%] lg:w-[90%] font-bold">
            Find your dreams car within a minute
          </h2>
          <p className="lg:w-[70%] text-lg">
            Unlock your adventure with hassle-free car rentals. Explore freedom
            on wheels. Book now!
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 1.5 }}
        >
          <img src="/audi a1.png" alt="" className="lg:relative" />
        </motion.div>
      </div>
    </>
  );
};
