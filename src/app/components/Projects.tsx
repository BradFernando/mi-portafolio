"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, FolderGit2 } from "lucide-react"
import { InMemoryProjectRepository } from "@/app/infrastructure/repositories/InMemoryProjectRepository"
import { ProjectService } from "@/app/application/services/ProjectService"
import type { Project } from "@/app/domain/entities/Project"

const projectRepository = new InMemoryProjectRepository()
const projectService = new ProjectService(projectRepository)

const ProjectsSection: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [otherProjects, setOtherProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadProjects = async () => {
      const allProjects = await projectService.getAllProjects()
      const featured = await projectService.getFeaturedProjects()

      setFeaturedProjects(featured)
      setOtherProjects(allProjects.filter((p) => !p.featured))
      setIsLoaded(true)
    }

    loadProjects()
  }, [])

  if (!isLoaded) {
    return <div>Cargando...</div>
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }} // Animación solo una vez
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">03.</span> Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }} // Animación solo una vez
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <h3 className="text-secondary text-sm mb-1">Proyecto Destacado</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">{project.title}</h4>
                <div className="bg-accent p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-sm text-gray-400">
                      {tech}
                      {i < project.technologies.length - 1 && " • "}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <Image
                    src={project.imageUrl || "/placeholder.svg?height=300&width=500"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/50 hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }} // Animación solo una vez
          className="mb-8 text-center"
        >
          <h3 className="text-2xl font-bold">Otros Proyectos Interesantes</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }} // Animación solo una vez
              className="bg-accent rounded-lg p-6 hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <FolderGit2 size={40} className="text-secondary" />
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs text-gray-400">
                    {tech}
                    {i < project.technologies.length - 1 && " • "}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          {/* Proyecto de ejemplo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-accent rounded-lg p-6 hover:translate-y-[-5px] transition-transform duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <FolderGit2 size={40} className="text-secondary" />
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2 text-white">Más muy proto</h4>
            <p className="text-gray-300 mb-4">Este es un proyecto en desarrollo. ¡Pronto habrá más detalles aquí!</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-400">React</span>
              <span className="text-xs text-gray-400"> • </span>
              <span className="text-xs text-gray-400">Next.js</span>
              <span className="text-xs text-gray-400"> • </span>
              <span className="text-xs text-gray-400">TypeScript</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection