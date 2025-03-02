"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { InMemoryExperienceRepository } from "@/app/infrastructure/repositories/InMemoryExperienceRepository"
import { ExperienceService } from "@/app/application/services/ExperienceService"
import type { Experience } from "@/app/domain/entities/Experience"

const experienceRepository = new InMemoryExperienceRepository()
const experienceService = new ExperienceService(experienceRepository)

const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [activeTab, setActiveTab] = useState<string>("")
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    const loadExperiences = async () => {
      const data = await experienceService.getAllExperiences()
      setExperiences(data)
      if (data.length > 0) {
        setActiveTab(data[0].id)
      }
      setIsLoaded(true)
    }

    loadExperiences()
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <section id="experience" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Cambiado a animate
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">02.</span> Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-gray-700">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all ${
                    activeTab === exp.id
                      ? "text-secondary border-secondary md:border-l-2 md:-ml-[2px] bg-accent/30"
                      : "text-gray-400 hover:text-gray-200 hover:bg-accent/10"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-2/3">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: activeTab === exp.id ? 1 : 0,
                  x: activeTab === exp.id ? 0 : 20,
                  display: activeTab === exp.id ? "block" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white">
                  {exp.position} <span className="text-secondary">@ {exp.company}</span>
                </h3>
                <p className="text-gray-400">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
                <p className="text-gray-300">{exp.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">Logros:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-secondary mr-2">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-accent rounded-full text-sm text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection