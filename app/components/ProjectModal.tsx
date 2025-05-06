import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Github, Globe, X } from "lucide-react";
import React from "react";
import { Link } from "react-router";
type ProjectModalProps = {
  project: TProject;
  onCloseCliked: (project: TProject | null) => void;
};
const ProjectModal = React.forwardRef<HTMLDivElement, ProjectModalProps>(
  ({ project, onCloseCliked: onCloseClicked }, ref) => {
    return (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          onClick={() => onCloseClicked(null)}
        />

        {/* Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-xl p-6 transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-sketchy-lg"
        >
          <button
            onClick={() => onCloseClicked(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          {/* Modal details */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4 shadow-sketchy-sm"
          />
          <h3
            className="text-2xl font-bold mb-2 text-gray-800"
            style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
          >
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.detailedDescription}</p>
          <h4
            className="font-semibold text-lg mb-2"
            style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
          >
            Key Features
          </h4>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            {project.features.map((f: string) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <h4
            className="font-semibold text-lg mb-2"
            style={{ fontFamily: "'Shadows Into Light', cursive" }} // Handwritten font
          >
            Challenges
          </h4>
          <ul>
            {project.challenges.map((c: string) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button
                asChild
                disabled={!project.liveUrl}
                className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90 shadow-sketchy-sm"
              >
                <Link
                  to={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2"
                >
                  <Globe className="h-5 w-5" />
                  View Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="gap-2 shadow-sketchy-sm"
              >
                <Link
                  to={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2"
                >
                  <Github className="h-5 w-5" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </>
    );
  }
);
export default ProjectModal;
