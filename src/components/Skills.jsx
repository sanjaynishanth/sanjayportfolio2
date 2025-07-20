import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript,
  SiReact, SiFramer, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiGit, SiGithub, SiPnpm, SiFirebase, SiVercel,
  SiPython, SiFastapi, SiNumpy, SiPandas, SiAmazon,
  SiOpenai, SiTensorflow, SiGooglecolab, SiHuggingface
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; 
import { useInView } from "react-intersection-observer";

const allSkills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-black" },
  { name: "pnpm", icon: SiPnpm, color: "text-yellow-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Vercel", icon: SiVercel, color: "text-black" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "Java", icon: FaJava, color: "text-[#f89820]" },
  { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
  { name: "NumPy", icon: SiNumpy, color: "text-blue-400" },
  { name: "Pandas", icon: SiPandas, color: "text-black" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-400" },

  
  { name: "OpenAI", icon: SiOpenai, color: "text-green-500" },
  { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-400" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  
  { name: "Google Colab", icon: SiGooglecolab, color: "text-yellow-600" },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skillContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen py-20 bg-white text-black flex justify-center items-center"
    >
      <div ref={ref} className="max-w-6xl px-4 mx-auto">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl font-bold mb-8 text-center"
        >
          Skills & Tools
        </motion.h2>
        <motion.div
          variants={skillContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {allSkills.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                variants={skillItemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
                className="flex items-center bg-gray-100 px-4 py-2 rounded-full cursor-default"
              >
                <Icon className={`text-2xl mr-2 ${s.color}`} />
                <span className="text-sm font-medium">{s.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
