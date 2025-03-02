import type { Skill } from "../entities/Skill"

export interface SkillRepository {
  getAllSkills(): Promise<Skill[]>
  getSkillsByCategory(category: string): Promise<Skill[]>
}

