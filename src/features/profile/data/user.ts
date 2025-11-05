import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Ayansh",
  lastName: "Kr Yadav",
  displayName: "Ayansh Kr Yadav",
  username: "ayansh-kr-yadav",
  gender: "male",
  pronouns: "he/him",
  bio: "Building at the intersection of Full Stack and Generative AI.",
  timeZone: "Asia/Kolkata",
  flipSentences: [
    "Full Stack Engineer",
    "GenAI Engineer",
    "Software Developer",
    "AI Enthusiast",
    "Open Source Contributor",
  ],
  address: "Kolkata, West Bengal, India",
  phoneNumber: "KzkxODg3MzI5Njk4NQ==", // base64 encoded +918873296985
  secondPhoneNumber: "",
  email: "aGVsbG9AYXlhbnNoLm9ubGluZQ==", // base64 encoded hello@ayansh.online
  website: "https://ayansh.online",
  jobTitle: "Full Stack + GenAI Engineer",
  jobs: [
    {
      title: "Data Analytics Intern",
      company: "YBI Foundation",
      website: "https://www.ybifoundation.org",
    },
  ],
  about: `
- **B.Tech IT student** at University of Kalyani, building at the intersection of **Full Stack** and **Generative AI**.
- Co-authored a **Springer-indexed research paper** at AdComSys 2024 ("Enhancing Accommodation Discovery: A Hybrid Approach to Paying Guest Recommendation Systems").
- Currently shipping **production-grade AI systems** — GraphRAG pipelines, autonomous agents with MCP servers, and semantic search applications.
- Passionate about turning LLM research into real deployed products.
- Targeting Full Stack + GenAI engineering roles at Indian product companies and startups.
  `,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "",
  keywords: [
    "ayansh kr yadav",
    "chunnu kr yadav",
    "genai engineer",
    "full stack engineer",
    "rag",
    "langchain",
    "langgraph",
    "nextjs developer",
    "react developer",
    "python developer",
  ],
  dateCreated: "2026-06-18",
};
