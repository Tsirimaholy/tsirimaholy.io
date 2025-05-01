import { Building, University } from "lucide-react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function About() {
  return (
    <section id="about" className="py-16 bg-white ">
      <div className="container mx-auto max-w-3xl px-4 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 font-shadow-into-light">
            About Me
          </h2>
          <p className="text-gray-600 relative">
            I’m Tsirimaholy, a full‑stack developer passionate about crafting
            scalable applications using Django or Spring Boot on the backend and
            React on the frontend.{" "}
            <strong className="text-center block">
              This is the path that led me here.
            </strong>
          </p>
        </motion.div>
        <img
          src="/path-to-there.svg"
          alt=""
          sizes=""
          className="border-2 w-[70%] mx-auto mb-10"
        />
        {/* Timeline */}
        <div className="space-y-12">
          {/* Timeline Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center sketchy-border-sm shadow-sketchy-md">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 font-shadow-into-light">
                First steps into the{" "}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-yellow-300/60 -skew-y-2 origin-left"></span>
                  <span className="relative">Tech world</span>
                </motion.span>
              </h3>
              <p className="text-sm text-gray-500 mb-2">July 2015 – Present</p>
              <p className="text-gray-700 leading-relaxed">
                At 13, I thought tech was just about{" "}
                <span className="line-through text-gray-500">
                  fixing my grandma's phone
                </span>{" "}
                and{" "}
                <span className="line-through text-gray-500">
                  rebooting the Wi-Fi
                </span>
                . But one day, I met someone who introduced me to the real{" "}
                <span className="underline decoration-yellow-500">
                  meaning of tech
                </span>
                . They showed me things like cybersecurity , Basic explanation
                about AI, and{" "}
                <span className="underline decoration-purple-500">
                  Android app development
                </span>
                . I was so curious that I asked them to teach me everything they
                knew.{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bg-green-200 origin-left h-2 bottom-1 -skew-y-0.5"
                  ></motion.span>
                  <span className="relative font-semibold text-gray-900">
                    They agreed, and that’s when my journey truly began.
                  </span>
                </span>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Every step of the way, from my first{" "}
                <span className="underline decoration-yellow-500">
                  "Hello World"
                </span>{" "}
                to building a small{" "}
                <span className="underline decoration-green-500">CLI app</span>,
                blew my mind 🤯. Then, I discovered{" "}
                <Link
                  to="https://www.youtube.com/@programmingwithmosh"
                  target="_blank"
                  className="relative underline decoration-blue-500 hover:cursor-pointer group"
                >
                  <span className="absolute inset-0 w-0 origin-left bg-blue-200 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative">
                    CodeWithMosh's course{" "}
                    <ExternalLink size={"15"} className="inline" />
                  </span>
                </Link>
                , and I was blown away again by how we can organize code, write
                clean, extensible, and understandable code, and follow best
                practices. It was like unlocking a whole new level of
                programming!
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex items-start gap-4"
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center sketchy-border-sm shadow-sketchy-md"
            >
              <University className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
              >
                The journey to{" "}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-yellow-300/60 -skew-y-2 origin-left"></span>
                  <span className="relative">university</span>
                </motion.span>{" "}
                and beyond
              </h3>
              <p className="text-sm text-gray-500 mb-2">2021 – 2024</p>
              <p className="text-gray-700 leading-relaxed">
                After high school, I faced challenges but remained determined. I
                discovered HEI University, where I honed my skills in{" "}
                <span className="underline decoration-yellow-500">
                  full-stack development
                </span>{" "}
                and landed my first job as a React Native developer within 9
                months. This experience taught me resilience and the power of
                continuous learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
