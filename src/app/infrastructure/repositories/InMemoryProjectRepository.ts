import type { Project } from "@/app/domain/entities/Project"
import type { ProjectRepository } from "@/app/domain/ports/ProjectRepository"

export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = [
    {
      id: "1",
      title: "Homeow-IOT",
      description:
        "Proyecto de Internet de las Cosas (IoT) que simula una casa inteligente utilizando sensores, actuadores y dispositivos conectados. El proyecto fue desarrollado en equipo como parte de un trabajo académico, utilizando Packet Tracer para la simulación de redes IoT. El objetivo principal fue demostrar cómo los dispositivos IoT pueden interactuar en un entorno doméstico para automatizar tareas como el control de luces, puertas y temperatura.",
      technologies: [
        "Packet Tracer",
        "IoT",
        "Sensores",
        "Actuadores",
        "Redes",
        "Simulación",
        "Protoboard",
        "Placa de programación con módulo WIFI",
      ],
      imageUrl: "https://i.ibb.co/C3gdGWpJ/project-iot.png",
      githubUrl: "", // No hay repositorio de GitHub
      liveUrl: "", // No hay enlace en vivo
      featured: true,
    },
    {
      id: "2",
      title: "Project Manager Api: Aplicación de Microservicios Freelance con Integración Móvil",
      description:
        "Una aplicación robusta diseñada con una arquitectura de microservicios y una aplicación móvil complementaria para la gestión de informes de trabajo de empleados. El sistema incluye gestión de usuarios, asignación de tareas y funcionalidades de informes de trabajo.",
      technologies: [
        "Spring Boot",
        ".NET Framework",
        "Flutter",
        "Angular",
        "Dart",
        "PostgreSQL",
        "Centro de servicio de mensajes cortos",
        "Docker",
        "Puerta de enlace API",
      ],
      imageUrl: "https://i.ibb.co/TMTVQY7d/PMA-PORTADA.png",
      githubUrl: "https://github.com/BradFernando/ProjectManagerAPI-Frontend.git",
      liveUrl: "https://github.com/BradFernando/ProjectManagerAPI.System-Backend.git",
      featured: true,
    },
    {
      id: "3",
      title: "Producción de Leche Pasteurizada",
      description:
        "Sistema integral para gestionar el proceso de producción de leche pasteurizada, desde la recepción de la materia prima hasta la generación de lotes de productos listos para su distribución. El proyecto utiliza una arquitectura de microservicios con Spring Boot (PostgreSQL) y Node.js (MongoDB), integrando RabbitMQ para la comunicación asíncrona y Docker para la gestión de contenedores. Además, se implementó un frontend en Angular para la visualización y manipulación de los datos.",
      technologies: [
        "Spring Boot",
        "Node.js",
        "Angular",
        "PostgreSQL",
        "MongoDB",
        "RabbitMQ",
        "Docker",
        "Docker Compose",
        "JWT",
        "Microservicios",
      ],
      imageUrl: "https://i.ibb.co/B5zTVWhj/projecto-planta-pasteurizadora-picture.png",
      githubUrl: "https://github.com/BradFernando/Proyecto_Pasteurizadora_Backend.git",
      liveUrl: "https://github.com/BradFernando/Proyecto_Frontend_Pasteurizadora.git",
      featured: true,
    },
  ]

  async getAllProjects(): Promise<Project[]> {
    return this.projects
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return this.projects.filter((project) => project.featured)
  }

  async getProjectById(id: string): Promise<Project | null> {
    const project = this.projects.find((p) => p.id === id)
    return project || null
  }
}