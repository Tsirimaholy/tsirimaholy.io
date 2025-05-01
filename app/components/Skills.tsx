import { motion } from "motion/react";
import { BrainCircuit, MonitorSmartphone, Server, Cloud, Layers } from "lucide-react";

export function Skills() {
  return (
    <section className="relative py-16 bg-gray-50" id="skills">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="p-3 bg-gray-200 rounded-full"
            >
              <BrainCircuit className="h-7 w-7 text-gray-700" />
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 mt-2">
            A comprehensive overview of my technical abilities and proficiency
            across different domains.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-blue-200">
                <MonitorSmartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Frontend</h3>
            </div>
            <p className="text-sm text-blue-700 mb-4">
              Creating responsive and interactive user interfaces.
            </p>
            <div className="space-y-3">
              {/* Main Stack */}
              <div className="p-3 bg-blue-200 border border-blue-300 rounded-lg flex items-center gap-3">
                <span className="text-blue-800 font-semibold">React</span>
                <span className="text-xs text-blue-700 bg-blue-300 px-2 py-1 rounded-full">
                  Main Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  React Native
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  TypeScript
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Next.js
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Remix(rrv7)
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  CSS3
                </span>
                <span className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  JavaScript
                </span>
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md border border-green-200 bg-gradient-to-br from-green-50 to-green-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-green-200">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Backend</h3>
            </div>
            <p className="text-sm text-green-700 mb-4">
              Building robust server-side applications and APIs.
            </p>
            <div className="space-y-3">
              {/* Main Stack */}
              <div className="p-3 bg-green-200 border border-green-300 rounded-lg flex items-center gap-3">
                <span className="text-green-800 font-semibold">Django</span>
                <span className="text-xs text-green-700 bg-green-300 px-2 py-1 rounded-full">
                  Main Stack
                </span>
              </div>
              <div className="p-3 bg-green-200 border border-green-300 rounded-lg flex items-center gap-3">
                <span className="text-green-800 font-semibold">Spring Boot</span>
                <span className="text-xs text-green-700 bg-green-300 px-2 py-1 rounded-full">
                  Main Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Python - DRF
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Node.js
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Express
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  MySQL
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  Prisma
                </span>
                <span className="px-4 py-2 text-sm font-medium text-green-800 bg-white border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  REST APIs
                </span>
              </div>
            </div>
          </motion.div>

          {/* DevOps & Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-orange-200">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800">
                DevOps & Infrastructure
              </h3>
            </div>
            <p className="text-sm text-orange-700 mb-4">
              Deployment, automation, and infrastructure management.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Git
              </span>
              <span className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Docker
              </span>
              <span className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                AWS
              </span>
              <span className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Linux
              </span>
              <span className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                CI/CD Pipelines
              </span>
              <span className="px-4 py-2 text-sm font-medium text-orange-800 bg-white border border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Shell Scripting
              </span>
            </div>
          </motion.div>

          {/* Development Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-purple-200">
                <Layers className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800">
                Development Practices
              </h3>
            </div>
            <p className="text-sm text-purple-700 mb-4">
              Methodologies, practices, and approaches to software development.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Agile/Scrum
              </span>
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Test-Driven Development
              </span>
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Code Reviews
              </span>
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                API Design
              </span>
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                System Design
              </span>
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Documentation
              </span>
              <span className="px-4 py-2 text-sm font-medium text-purple-800 bg-white border border-purple-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                Pair Programming
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
