export interface Skill {
    id: string
    name: string
    category: "frontend" | "backend" | "devops" | "security" | "database" | "other"
    icon?: string
    level: number // 1-5
  }
  
  