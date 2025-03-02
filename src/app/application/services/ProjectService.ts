import type { Project } from "@/app/domain/entities/Project"
import type { ProjectRepository } from "@/app/domain/ports/ProjectRepository"

export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAllProjects()
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return this.projectRepository.getFeaturedProjects()
  }

  async getProjectById(id: string): Promise<Project | null> {
    return this.projectRepository.getProjectById(id)
  }
}

