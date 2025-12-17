import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { EducationSection } from "@/sections/EducationSection";
import { ReferencesSection } from "@/sections/ReferencesSection";
import { WritingSection } from "@/sections/WritingSection";

export const MainSection = () => {
  return (
    <main className="box-border caret-transparent w-full pt-12 pb-24 md:w-3/5">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ReferencesSection />
      <WritingSection />
    </main>
  );
};
