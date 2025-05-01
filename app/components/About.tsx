import { Building, University, Heart, DownloadCloud } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "~/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <p className="text-gray-600">
            I'm Tsirimaholy, a full‑stack developer passionate about crafting
            scalable, performant web applications. Here's my journey so far.
          </p>
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
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
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
              <p className="text-sm text-gray-500 mb-2">July 2022 – Present</p>
              <p className="text-gray-700 leading-relaxed">
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute inset-y-1 inset-x-0 bg-blue-100 -skew-y-2 origin-left"
                  ></motion.span>
                  <span className="relative">
                    At 13, I was introduced to the tech world.
                  </span>
                </span>{" "}
                Initially, I thought tech was just about repairing phones and
                laptops. But when I learned about{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute inset-y-1 inset-x-0 bg-blue-100 -skew-y-2 origin-left"
                  ></motion.span>
                  <span className="relative">cybersecurity</span>
                </span>
                ,{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute inset-y-1 inset-x-0 bg-blue-100 -skew-y-2 origin-left"
                  ></motion.span>
                  <span className="relative">AI</span>
                </span>
                , and{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute inset-y-1 inset-x-0 bg-blue-100 -skew-y-2 origin-left"
                  ></motion.span>
                  <span className="relative">app development</span>
                </span>
                , my curiosity was sparked. I dove into Android development, and
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
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <University className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
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
              <p className="text-sm text-gray-500 mb-2">2021 – 2024</p>
              <p className="text-gray-700 leading-relaxed">
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute inset-y-1 inset-x-0 bg-blue-100 -skew-y-2 origin-left"
                  ></motion.span>
                  <span className="relative">
                    After high school, I faced challenges but remained
                    determined.
                  </span>
                </span>{" "}
                I discovered HEI University, where I honed my skills in{" "}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute inset-y-1 inset-x-0 bg-blue-100 -skew-y-2 origin-left"
                  ></motion.span>
                  <span className="relative">full-stack development</span>
                </span>{" "}
                and landed my first job as a React Native developer within 9
                months. This experience taught me resilience and the power of
                continuous learning.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition-all"
          >
            <a href="/Tsirimaholy_resume.pdf" download>
              <DownloadCloud className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
