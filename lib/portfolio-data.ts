export const portfolioData = {
  name: "Adam Stott",
  title: "Senior Software Engineer",
  description:
    "I am a Senior Software Engineer specialising in backend data integration and AI. I have extensive experiance with AWS and kubernetes. I also enjoy frontend development - take a look at my latest projects below.",
  avatar: "/profile-picture.png",
  avatarFallback: "AS",
  location: "Manchester, UK",
  socials: [
    { label: "GitHub", href: "https://github.com/AdamsEng", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adamstott0", icon: "linkedin" },
    { label: "Email", href: "mailto:adamstott@pm.me", icon: "mail" },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Go",
  ],
  projects: [
    {
      title: "Scare Scale Web App",
      description:
        "Scare Scale is a community based horror movie ranking site to score movies on their scariness.",
      tags: ["TypeScript", "PostgreSQL", "Vercel", "AWS", "Lambda", "Java", "Serverless", "Supabase"],
      screenshot: "/screenshots/scarescale.png",
      href: "https://github.com/scare-scale/ScareScale",
      live: "https://scarescale.com/",
    },
    {
      title: "Agentic AI Ratings",
      description:
        "An AI-powered rating system for the Scare Scale platform that integrates with external APIs and AWS Bedrock to generate automated scariness scores.",
      tags: ["TypeScript", "Node.js", "OpenAI", "PostgreSQL", "Bedrock", "AWS", "Lambda", "Serverless"],
      screenshot: "/screenshots/scalescale-ai.png",
      live: "https://scarescale.com/ai-reviews",
    },
    {
      title: "AWS Lambda Batch Job",
      description:
        "A scheduled AWS Lambda function for batch updating movie metadata and ratings from external APIs.",
      tags: ["AWS", "Lambda", "Java", "Serverless"],
      screenshot: "/screenshots/scalescale-ai.png",
      href: "https://github.com/scare-scale/scare-scale-batch-job",
    }
  ],
}
