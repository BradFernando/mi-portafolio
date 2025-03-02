import type { Skill } from "@/app/domain/entities/Skill"
import type { SkillRepository } from "@/app/domain/ports/SkillRepository"

export class InMemorySkillRepository implements SkillRepository {
  private skills: Skill[] = [
    // Frontend
    { id: "1", name: "React", category: "frontend", level: 5 },
    { id: "2", name: "TypeScript", category: "frontend", level: 5 },
    { id: "3", name: "JavaScript", category: "frontend", level: 5 },
    { id: "4", name: "Next.js", category: "frontend", level: 4 },
    { id: "5", name: "Tailwind CSS", category: "frontend", level: 5 },
    { id: "6", name: "Angular", category: "frontend", level: 4 },

    // Backend
    { id: "7", name: "Node.js", category: "backend", level: 4 },
    { id: "8", name: "Java", category: "backend", level: 4 },
    { id: "9", name: "Spring Boot", category: "backend", level: 4 },
    { id: "10", name: "Express.js", category: "backend", level: 4 },
    { id: "11", name: "Python", category: "backend", level: 4 },
    { id: "12", name: "REST API", category: "backend", level: 5 },
    { id: "13", name: "GraphQL", category: "backend", level: 3 },

    // DevOps
    { id: "14", name: "AWS", category: "devops", level: 4 },
    { id: "15", name: "Docker", category: "devops", level: 4 },
    { id: "16", name: "Kubernetes", category: "devops", level: 3 },
    { id: "17", name: "Terraform", category: "devops", level: 3 },
    { id: "18", name: "CI/CD", category: "devops", level: 4 },

    // Security
    { id: "19", name: "Cybersecurity", category: "security", level: 5 },
    { id: "20", name: "Ethical Hacking", category: "security", level: 5 },
    { id: "21", name: "JWT", category: "security", level: 4 },
    { id: "22", name: "OAuth", category: "security", level: 4 },

    // Database
    { id: "23", name: "MongoDB", category: "database", level: 4 },
    { id: "24", name: "PostgreSQL", category: "database", level: 4 },
    { id: "25", name: "MySQL", category: "database", level: 4 },
    { id: "26", name: "Redis", category: "database", level: 3 },

    // Other
    { id: "27", name: "Networking", category: "other", level: 5 },
    { id: "28", name: "Scrum", category: "other", level: 4 },
    { id: "29", name: "Agile", category: "other", level: 4 },
    { id: "30", name: "Git", category: "other", level: 5 },
    { id: "31", name: "RabbitMQ", category: "other", level: 4 },
    { id: "32", name: "Microservicios", category: "other", level: 4 },
  ]

  async getAllSkills(): Promise<Skill[]> {
    return this.skills
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return this.skills.filter((skill) => skill.category === category)
  }
}