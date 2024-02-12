import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className=" w-24 h-24 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Self Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am Habib Ur Rehman, a dedicated and skilled blockchain developer with
        a strong foundation in Ethereum and Hyperledger Fabric technologies. 
        Currently employed at Invoice-Mate in Faisalabad, Pakistan, since February 2022,
        I specialize in ERC20, ERC721, and ERC1155 token development, as well as 
        smart-contract development using Solidity, Hyperledger Fabric, and Go programming
        languages. My expertise extends to deploying projects on Azure Ubuntu VM and 
        managing various server-side tasks, showcasing my proficiency in backend development.
        Throughout my career, I have successfully developed and implemented innovative
        blockchain solutions, ensuring alignment with business requirements. My commitment
        to excellence is evident in my ability to analyze user stories and design robust
        architectures for implementing new features related to blockchain technology.
        With a passion for creating secure and efficient blockchain applications, I am
        dedicated to contributing my skills and knowledge to the ever-evolving field 
        of blockchain development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
