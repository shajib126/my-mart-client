"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]  grid grid-cols-5">
      <div className="w-full h-full ">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div initial={{y:"-100%"}} whileInView={{y:0}} transition={getTransition()}  className="w-full h-full">
          <Image
            src="https://images.pexels.com/photos/3052651/pexels-photo-3052651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={300}
            height={700}
            priority
            className="w-full h-full object-cover"
          />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full  flex items-center">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div initial={{y:"-100%"}} whileInView={{y:0}} transition={getTransition(0.2)}  className="w-full h-full">
          <Image
            src="https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={300}
            height={700}
            priority
            className="w-full h-full object-cover"
          />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full "></div>
      <div className="w-full h-full  flex items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div initial={{y:"-100%"}} whileInView={{y:0}} transition={getTransition(0.4)}  className="w-full h-full">
          <Image
            src="https://images.pexels.com/photos/11531297/pexels-photo-11531297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={300}
            height={700}
            priority
            className="w-full h-full object-cover"
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
