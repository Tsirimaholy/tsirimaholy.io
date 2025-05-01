import { Building, University } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "~/components/ui/button";

export function About() {
  return (
    <section
      id="about"
      className="py-16 bg-white"

    >
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <h2
            className="text-3xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
          >
            About Me
          </h2>
          <p
            className="text-gray-600 relative"
            style={{ fontFamily: "'Patrick Hand', cursive" }} // Handwritten font
          >
            I'm Tsirimaholy, a full‑stack developer passionate about crafting
            scalable, performant web applications. Here's my journey so far.
          </p>

          {/* Moving Pen Animation */}
          <motion.div
            className="absolute top-0 left-0 w-6 h-6"
            style={{
              animation: "movePen 5s linear infinite",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.443 19.27a4.5 4.5 0 01-1.89 1.12l-3.11.89.89-3.11a4.5 4.5 0 011.12-1.89L16.862 3.487z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 8.25l2.25 2.25"
              />
            </svg>
          </motion.div>
        </motion.div>

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
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-dashed border-gray-400"
              style={{
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.1)", // Sketchy shadow
              }}
            >
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
              >
                First steps into the{" "}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 origin-left"></span>
                  <span className="relative">Tech world</span>
                </motion.span>
              </h3>
              <p
                className="text-sm text-gray-500 mb-2"
                style={{ fontFamily: "'Patrick Hand', cursive" }} // Handwritten font
              >
                July 2022 – Present
              </p>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: "'Patrick Hand', cursive" }} // Handwritten font
              >
                At 13, I was introduced to the tech world. Initially, I thought
                tech was just about repairing phones and laptops. But when I
                learned about cybersecurity, AI, and app development, my
                curiosity was sparked. I dove into Android development, and
                that passion has driven me ever since.
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
              className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-dashed border-gray-400"
              style={{
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.1)", // Sketchy shadow
              }}
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
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 origin-left"></span>
                  <span className="relative">university</span>
                </motion.span>{" "}
                and beyond
              </h3>
              <p
                className="text-sm text-gray-500 mb-2"
                style={{ fontFamily: "'Patrick Hand', cursive" }} // Handwritten font
              >
                2021 – 2024
              </p>
              <p
                className="text-gray-700 leading-relaxed"
                style={{ fontFamily: "'Patrick Hand', cursive" }} // Handwritten font
              >
                After high school, I faced challenges but remained determined. I
                discovered HEI University, where I honed my skills in
                full-stack development and landed my first job as a React Native
                developer within 9 months. This experience taught me resilience
                and the power of continuous learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
