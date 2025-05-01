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
                <span className="relative inline-block group">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative">Tech world</span>
                </span>
              </h3>
              <p className="text-sm text-gray-500 mb-2">July 2022 – Present</p>
              <p className="text-gray-700 leading-relaxed">
                At 13, I was introduced to the tech world. Initially, I thought
                tech was just about repairing phones and laptops. But when I
                learned about{" "}
                <span className="relative group">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative sparkle group-hover:animate-sparkle">
                    cybersecurity
                  </span>
                </span>
                ,{" "}
                <span className="relative group">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative sparkle group-hover:animate-sparkle">
                    AI
                  </span>
                </span>
                , and{" "}
                <span className="relative group">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative sparkle group-hover:animate-sparkle">
                    app development
                  </span>
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
                <span className="relative inline-block group">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative">university</span>
                </span>{" "}
                and beyond
              </h3>
              <p className="text-sm text-gray-500 mb-2">2021 – 2024</p>
              <p className="text-gray-700 leading-relaxed">
                After high school, I faced financial challenges but remained
                determined. I discovered HEI University, where I honed my
                skills in{" "}
                <span className="relative group">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  <span className="relative sparkle group-hover:animate-sparkle">
                    full-stack development
                  </span>
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

      {/* Sparkle Animation CSS */}
      <style jsx>{`
        .sparkle {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }
        .sparkle::after {
          content: "✨";
          position: absolute;
          top: -10px;
          right: -10px;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .sparkle:hover::after {
          opacity: 1;
          transform: scale(1);
        }
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
