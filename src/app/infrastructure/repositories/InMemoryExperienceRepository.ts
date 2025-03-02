import type { Experience } from "@/app/domain/entities/Experience"
import type { ExperienceRepository } from "@/app/domain/ports/ExperienceRepository"

export class InMemoryExperienceRepository implements ExperienceRepository {
  private experiences: Experience[] = [
    {
      id: "1",
      company: "Sweaden Compañía de Seguros",
      position: "Programador Full-Stack",
      startDate: "2025-01",
      endDate: "Present",
      description:
        "Desarrollo de soluciones tecnológicas para el sector de seguros, implementando sistemas de gestión y análisis de datos.",
      technologies: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Microservicios", "IA"],
      achievements: [
        "Creación de nuevos microservicios tanto en backend como en frontend.",
        "Migración de servicios legacy a versiones actualizadas utilizando Java 21.",
        "Implementación de ideas innovadoras en IA para optimizar procesos y mejorar la experiencia de los desarrolladores.",
        "Implementación de Databases as a Service (DBaaS) para mejorar la escalabilidad y eficiencia de los sistemas.",
        "Integración de frameworks nuevos y tecnologías emergentes para impulsar el crecimiento del negocio.",
      ],
    },
    {
      id: "2",
      company: "iDrix Technology",
      position: "Desarrollador de aplicaciones Web/Móvil",
      startDate: "2024-01",
      endDate: "2024-03",
      description:
        "Participé en el desarrollo de Zicoart, una aplicación móvil innovadora creada para una empresa del sector artístico.",
      technologies: ["Flutter", "Dart", "Postman", "Android Studio", "UI/UX"],
      achievements: [
        "Desarrollo móvil multiplataforma con Flutter y Dart, garantizando un diseño moderno y responsive.",
        "Creación de interfaces intuitivas y amigables enfocadas en la experiencia del usuario (UI/UX).",
        "Integración y depuración de APIs utilizando Postman para pruebas exhaustivas.",
        "Resolución de bugs y optimización del rendimiento en Android Studio.",
        "Ejecución de pruebas funcionales y de calidad para asegurar estándares óptimos.",
      ],
    },
    {
      id: "3",
      company: "Acurio & Asociados",
      position: "Pasante de Tecnología de la Información",
      startDate: "2023-09",
      endDate: "2023-11",
      description:
        "Formé parte del Departamento de TI, desempeñando un rol clave en la automatización de procesos y gestión de datos críticos.",
      technologies: ["Python", "Windows Server", "Pentaho", "Data Warehouse"],
      achievements: [
        "Desarrollo de scripts en Python para la gestión eficiente de archivos relacionados con avalúos importantes.",
        "Implementación y administración en Windows Server, asegurando un entorno robusto para las operaciones.",
        "Automatización de procesos empresariales utilizando herramientas de data warehouse como Pentaho, mejorando significativamente la eficiencia.",
        "Pruebas y resolución de errores, garantizando un flujo de trabajo optimizado y libre de interrupciones.",
      ],
    },
  ]

  async getAllExperiences(): Promise<Experience[]> {
    return this.experiences
  }
}