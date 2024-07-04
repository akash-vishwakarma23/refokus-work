import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.png";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.jpg";


const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}}
            className="w-full h-full "
          >
            <img src={image1} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}}
            className="w-full h-full "
          >
            <img src={image2} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}}
            className="w-full h-full "
          >
            <img src={image3} alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease: [0.76, 0, 0.24, 1] , duration: .5}}
            className="w-full h-full "
          >
            <img src={image4} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
