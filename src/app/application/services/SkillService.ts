import type { Skill } from "@/app/domain/entities/Skill"
import type { SkillRepository } from "@/app/domain/ports/SkillRepository"

export class SkillService {
  constructor(private skillRepository: SkillRepository) {}

  async getAllSkills(): Promise<Skill[]> {
    return this.skillRepository.getAllSkills()
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return this.skillRepository.getSkillsByCategory(category)
  }

  async getSkillCategories(): Promise<string[]> {
    const skills = await this.skillRepository.getAllSkills()
    const categories = new Set(skills.map((skill) => skill.category))
    return Array.from(categories)
  }
}

