import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, XCircle, CheckCircle, Code } from "lucide-react"; 

const colors = {
  background: "#ffffff",
  primary: "#000000",
  accent: "#000c18ff", 
  lightText: "#6c6c6c",
  darkIcons: "#000c18ff", 
  inputBorder: "#cccccc",
  inputFocusBorder: "#888888",
  buttonHover: "#000c18ff",
};

const fonts = {
  heading: "'Funnel Sans', sans-serif", 
  body: "'Roboto', sans-serif", 
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageBox, setMessageBox] = useState({
    visible: false,
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showMessage = (type, text) => {
    setMessageBox({ visible: true, type, text });
    setTimeout(() => {
      setMessageBox({ visible: false, type: "", text: "" });
    }, 3000);
  };

  const sendEmail = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      showMessage("error", "Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("error", "Please enter a valid email address.");
      return;
    }

    const mailtoLink = `mailto:sanjaynishanth.ss@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    try {
      window.location.href = mailtoLink;
      showMessage("success", "Opening your mail client...");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showMessage("error", "Could not open mail client. Please try again.");
    }
  };

  // Framer Motion Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="w-screen min-h-screen px-6 py-24 flex flex-col justify-center items-center relative overflow-hidden"
      style={{ backgroundColor: colors.background, fontFamily: fonts.body }}
    >
      <motion.div
        className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
      >
        {/* LEFT COLUMN - Let's Connect and Social Links */}
        <motion.div className="flex flex-col justify-center text-center md:text-left">
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: fonts.heading, color: colors.primary }}
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ color: colors.lightText }}
          >
            I'm open to freelance projects, internships, and collaborations. Feel free to get in touch!
          </motion.p>

          {/* Social Media Icons */}
          <div className="flex gap-8 justify-center md:justify-start">
            {[ 
              { href: "mailto:sanjaynishanth.ss@gmail.com", icon: <Mail size={28} style={{ color: colors.darkIcons }} /> },
              { href: "https://linkedin.com/in/sanjay-s-16312b257", icon: <Linkedin size={28} style={{ color: colors.darkIcons }} /> },
              { href: "https://github.com/sanjaynishanth", icon: <Github size={28} style={{ color: colors.darkIcons }} /> },
              { href: "https://leetcode.com/your-leetcode-profile/", icon: <Code size={28} style={{ color: colors.darkIcons }} /> },
            ].map(({ href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full transition-all hover:bg-gray-100"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN - FORM */}
        <motion.div className="p-0 md:p-0 bg-transparent">
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: fonts.heading, color: colors.primary }}
          >
            Send a Message
          </motion.h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {["name", "email"].map((field, idx) => (
              <motion.input
                key={idx}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                variants={itemVariants}
                whileFocus={{
                  scale: 1.01,
                  borderColor: colors.inputFocusBorder,
                }}
                className="px-5 py-3 w-full border-b transition-all text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
                style={{ fontFamily: fonts.body, borderColor: colors.inputBorder }}
              />
            ))}
            <motion.textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              variants={itemVariants}
              whileFocus={{
                scale: 1.01,
                borderColor: colors.inputFocusBorder,
              }}
              className="w-full px-5 py-3 border-b transition-all text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0"
              style={{ fontFamily: fonts.body, borderColor: colors.inputBorder }}
            />
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(52, 73, 94, 0.2)",
                backgroundColor: colors.buttonHover,
              }}
              whileTap={{ scale: 0.97 }}
              onClick={sendEmail}
              className="w-full px-8 py-4 text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
              style={{ backgroundColor: colors.accent }}
            >
              Send Message <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* SUCCESS / ERROR MESSAGE BOX */}
      <AnimatePresence>
        {messageBox.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-4 rounded-lg shadow-xl flex items-center gap-3 z-50 ${
              messageBox.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {messageBox.type === "success" ? (
              <CheckCircle size={24} />
            ) : (
              <XCircle size={24} />
            )}
            <span className="font-medium">{messageBox.text}</span>
            <button onClick={() => setMessageBox({ ...messageBox, visible: false })} className="ml-2 text-white/80 hover:text-white">
              <XCircle size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Underline Styles */}
      <style>
        {`
          .underline-animation {
            position: relative;
            display: inline-block;
          }

          .underline-animation::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: ${colors.accent};
            transition: width 0.3s ease;
          }

          .group:hover .underline-animation::after {
            width: 100%;
          }
        `}
      </style>
    </section>
  );
}
