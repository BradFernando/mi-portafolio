import type { Experience } from "../entities/Experience"

export interface ExperienceRepository {
  getAllExperiences(): Promise<Experience[]>
}

