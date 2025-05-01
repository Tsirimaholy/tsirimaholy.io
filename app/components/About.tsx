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
            I'm Tsirimaholy, a full‑stack developer passionate about building
            scalable, performant web applications. Here's my journey.
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
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                First steps into the <span className="relative inline-block">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2"></span>
                  <span className="relative">Tech world</span>
                </span>!
              </h3>
              <p className="text-sm text-gray-500 mb-2">July 2022 – Present</p>
              <p className="text-gray-700 leading-relaxed">
                Back in the day, I was around 13-14 years old. Like many boys, I loved playing games. A person introduced me to the tech world, and initially, I wasn't impressed. My perception at the time was that tech guys were just phone, TV, and laptop repairers. But later, the same person introduced me to cybersecurity, AI, and Android app development. I was captivated by Android development and became curious about how people build apps. That curiosity sparked my journey into coding, and I haven't stopped since.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <University className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                The journey to <span className="relative inline-block">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2"></span>
                  <span className="relative">university</span>
                </span> and my first professional work
              </h3>
              <p className="text-sm text-gray-500 mb-2">2021 – 2024</p>
              <p className="text-gray-700 leading-relaxed">
                I started learning Java and web development with HTML, CSS, and JavaScript. I also explored Python and built my first full-stack apps. After graduating high school, I applied to a university but couldn't enroll due to financial constraints. Later, I discovered HEI University, researched their program, and was inspired by their professors and founders. I applied, passed the entrance exam, and started my journey there. Within 9 months, I landed my first job as a mobile developer using React Native. This was the beginning of my professional career in tech.
              </p>
            </div>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Interests & <span className="relative inline-block">
                  <span className="absolute inset-0 bg-yellow-200 -skew-y-2"></span>
                  <span className="relative">Hobbies</span>
                </span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm an open-source contributor, tech blogger, and music lover. I enjoy learning new libraries and frameworks and staying updated with the ever-evolving tech world.
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
