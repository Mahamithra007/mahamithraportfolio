import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { MainContent } from "@/components/portfolio/MainContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahamithra SR — Global Operations Specialist | Lean Six Sigma Black Belt" },
      {
        name: "description",
        content:
          "Executive portfolio of Mahamithra SR — Operations leader and Lean Six Sigma Black Belt with 8+ years scaling digital transformation, financial governance, and global program delivery.",
      },
      { property: "og:title", content: "Mahamithra SR — Global Operations Specialist" },
      {
        property: "og:description",
        content:
          "Operations leader and Lean Six Sigma Black Belt specializing in digital transformation, financial governance, and international program management.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <MainContent />
    </div>
  );
}
