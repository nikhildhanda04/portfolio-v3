
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Next Hire",
    description: "This is an AI-based job finding platform. Just upload your resume and voila! It finds the best-suited jobs for you and auto-applies.",
    tech: ["Next.js", "Mongo", "NLP", "Scikit", "Motion"],
    link: "https://github.com/nikhildhanda04/next-hire", 
    image: "/Nexthire.png", 
  },
    {
    title: "Roadmap Generator",
    description: "This is a saas project, which runs on local LLM model and uses reactflow to generate roadmap that help you in learning",
    tech: ["Reactjs", "Mongo", "Ollama", "Express", "jwt", "Motion", ],
    link: "https://github.com/nikhildhanda04/Roadmap-Generator", 
    image: "/Roadmap.png", 
  },
      {
    title: "Font Finder",
    description: "This parses into the project directory and passes out the font and its details used in that project.",
    tech: ["Reactjs", "Manifest", "Motion"],
    link: "https://github.com/nikhildhanda04/FontFinder", 
    image: "/Fontfinder.png", 
  },
        {
    title: "Recipe Lab",
    description: "This is a completely AI handeled money managenment dashboard, and AI suggests you how to spend money.",
    tech: ["Nextjs", "JWT","Gemini API", "Tailwind"],
    link: "https://github.com/nikhildhanda04/recipe-lab", 
    image: "/recipelab.png", 
  },
];
