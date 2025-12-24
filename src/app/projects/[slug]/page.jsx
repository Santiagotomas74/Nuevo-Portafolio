import { notFound } from "next/navigation";
import { projects } from "../../../data/projects.js";
import ProjectDetail from "../../../components/sections/ProjectDetail.jsx";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  // Buscamos el proyecto comparando el slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
