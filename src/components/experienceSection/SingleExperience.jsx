import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="min-h-[370px] md:w-[260px] sm:w-full border-2 border-orange border-dashed rounded-2xl p-6 flex flex-col justify-between bg-transparent"
    >
      <div>
        <p className="font-bold text-cyan">{experience.job}</p>
        <p className="text-orange">{experience.company}</p>
        <p className="text-lightGrey">{experience.date}</p>
        <ul className="list-disc mt-4 pl-4 text-sm leading-relaxed">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
