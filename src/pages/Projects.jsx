import { useMemo, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [showFeatured, setShowFeatured] = useState(false);

  //useMemo is optional here but it is nice to show the hook
  const visibileProject = useMemo(() => {
    return showFeatured ? projects.filter((p) => p.featured) : projects;
  }, [showFeatured]);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showFeatured}
            onChange={(e) => setShowFeatured(e.target.checked)} // <-- setValue/setState
          />
          Show only featured
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visibileProject.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
