import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "graphrag-pipeline",
    title: "GraphRAG Production Pipeline",
    period: { start: "01.2025" },
    githubLink: "https://github.com/ayansh-kr-yadav?tab=repositories",
    demoLink: "https://graphrag.demo.com", // Placeholder
    skills: [
      "LangGraph",
      "Qdrant",
      "Neo4j",
      "LangFuse",
      "MinIO",
      "Docker",
      "Nginx",
    ],
    isExpanded: true,
    description: `Production-grade GraphRAG pipeline combining vector search and knowledge graph retrieval for hybrid, context-aware document querying.
- Vector store integration via Qdrant for semantic similarity search
- Knowledge graph via Neo4j for entity-relationship traversal
- LangFuse for full observability, tracing, and evaluation
- Fully Dockerized with Nginx as reverse proxy
- LangGraph for stateful multi-step agent orchestration`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=GraphRAG+Production+Pipeline",
  },
  {
    id: "autonomous-ai-agent",
    title: "Autonomous AI Agent with MCP Servers",
    period: { start: "02.2025" },
    githubLink: "https://github.com/ayansh-kr-yadav?tab=repositories",
    demoLink: "https://aiagent.demo.com", // Placeholder
    skills: [
      "LangChain",
      "LangGraph",
      "MCP Servers",
      "Llama-3",
      "Gemma",
      "FastAPI",
      "Python",
    ],
    description: `A fully autonomous AI agent system with self-hosted LLMs, tool binding, guardrails, and human oversight capabilities.
- Self-hosted LLMs: Llama-3 and Gemma via Ollama
- Tool binding with MCP (Model Context Protocol) servers
- Guardrails with PII detection and content filtering
- LLM-as-a-Judge for automated response evaluation
- Human-in-the-loop workflows with checkpointing
- Stateful execution via LangGraph`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Autonomous+AI+Agent",
  },
  {
    id: "ai-ecommerce",
    title: "AI-Powered E-Commerce Platform",
    period: { start: "01.2026" },
    githubLink: "https://github.com/ayansh-kr-yadav?tab=repositories",
    demoLink: "https://ecommerce.demo.com", // Placeholder
    skills: ["Next.js", "Node.js", "MongoDB", "Qdrant", "Docker"],
    description: `Full stack e-commerce platform with AI-driven semantic product search powered by vector embeddings.
- Semantic search using Qdrant vector database
- Natural language product discovery
- Full stack Next.js frontend + Node.js backend
- MongoDB for product and user data
- Fully Dockerized deployment`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=AI-Powered+E-Commerce",
  },
  {
    id: "realtime-app",
    title: "Full Stack Real-Time Application",
    period: { start: "03.2025" },
    githubLink: "https://github.com/ayansh-kr-yadav?tab=repositories",
    demoLink: "https://realtime.demo.com", // Placeholder
    skills: [
      "Next.js",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    description: `Real-time full stack application with WebSocket communication and dual-database architecture.
- Real-time bidirectional communication via Socket.IO
- PostgreSQL for relational/structured data
- MongoDB for flexible document storage
- Next.js frontend with Node.js backend
- Dockerized for consistent deployment`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Real-Time+App",
  },
];
