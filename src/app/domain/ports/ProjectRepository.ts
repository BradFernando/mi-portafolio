import type { Project } from "../entities/Project"

export interface ProjectRepository {
  getAllProjects(): Promise<Project[]>
  getFeaturedProjects(): Promise<Project[]>
  getProjectById(id: string): Promise<Project | null>
}

