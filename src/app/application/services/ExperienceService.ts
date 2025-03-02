import type { Experience } from "@/app/domain/entities/Experience"
import type { ExperienceRepository } from "@/app/domain/ports/ExperienceRepository"

export class ExperienceService {
  constructor(private experienceRepository: ExperienceRepository) {}

  async getAllExperiences(): Promise<Experience[]> {
    return this.experienceRepository.getAllExperiences()
  }
}

