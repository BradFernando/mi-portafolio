"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, Server, Cloud, Shield, Database, Network, Star } from "lucide-react"
import { InMemorySkillRepository } from "@/app/infrastructure/repositories/InMemorySkillRepository"
import { SkillService } from "@/app/application/services/SkillService"
import type { Skill } from "@/app/domain/entities/Skill"

const skillRepository = new InMemorySkillRepository()
const skillService = new SkillService(skillRepository)

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-6 h-6" />,
  backend: <Server className="w-6 h-6" />,
  devops: <Cloud className="w-6 h-6" />,
  security: <Shield className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  other: <Network className="w-6 h-6" />,
}

const SkillCard: React.FC<{ category: string; skills: Skill[]; index: number }> = ({ category, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-accent/10 rounded-lg p-6 backdrop-blur-sm border border-accent/20 hover:border-secondary/50 transition-all duration-300 shadow-lg hover:shadow-secondary/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
          {categoryIcons[category.toLowerCase()] || <Network className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-200 group-hover:text-secondary transition-colors">{skill.name}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gray-500">
                    {i < skill.level ? (
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                    ) : (
                      <Star className="w-4 h-4" />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-2 bg-accent/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level * 20}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-secondary/70"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const SkillsSection: React.FC = () => {
  const [skillCategories, setSkillCategories] = useState<string[]>([])
  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, Skill[]>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadSkills = async () => {
      const categories = ["frontend", "backend", "devops", "security", "database", "other"]
      const skillsMap: Record<string, Skill[]> = {}

      for (const category of categories) {
        skillsMap[category] = await skillService.getSkillsByCategory(category)
      }

      setSkillCategories(categories)
      setSkillsByCategory(skillsMap)
      setIsLoaded(true)
    }

    loadSkills()
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <section id="skills" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">04.</span> Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category} category={category} skills={skillsByCategory[category]} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection