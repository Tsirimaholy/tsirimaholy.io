import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Globe, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  onSelect: (project: any) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      className="relative group overflow-hidden rounded-lg bg-white border-2 shadow-sketchy-lg"
    >
      {/* Image */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <h3 className="text-white text-lg font-semibold">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 font-shadow-into-light">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-100 text-gray-800 sketchy-border-sm shadow-sketchy-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-gray-200 flex justify-between">
        {project.liveUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-1 sketchy-border-sm shadow-sketchy-sm"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
              Demo
            </a>
          </Button>
        )}

        <Button
          variant="secondary"
          size="sm"
          onClick={() => onSelect(project)}
          className="gap-1 shadow-sketchy-sm"
        >
          Details
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
