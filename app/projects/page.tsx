import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of residential, commercial, investment and mixed-use properties handled by Regal 360° across Sri Lanka.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Properties that reach their full potential"
        description="A selection of homes, commercial spaces and investments we've taken from first conversation to final signature — across Colombo and beyond."
        highlights={{ 4: "brand" }}
      />
      <ProjectsGrid />
      <CTA />
    </>
  );
}
