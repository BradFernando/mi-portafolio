"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowDownCircle } from "lucide-react"

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      // Apply subtle movement to the image
      imageRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-secondary text-xl mb-2">Hola, soy</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Bradley Corro</h1>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            Software Developer & IT Professional
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg">
            Especialista en desarrollo de software, ciberseguridad y arquitectura de sistemas. Creando soluciones
            tecnológicas eficientes y seguras para necesidades específicas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="lg">
              <a href="https://github.com/BradFernando?tab=repositories" target="_blank" rel="noopener noreferrer">
                Ver Proyectos
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a
                href="https://drive.google.com/uc?export=download&id=1CNlb8ZC1oZAovMPyxDgEbDx5NhHcvmEl" // Reemplaza con el enlace de tu CV
                download="Bradley_Fernando_Corro_CV.pdf" // Nombre del archivo al descargar
              >
                Descargar CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
            <Image
              src="https://i.ibb.co/jfByxts/bradley-Corro-Avatar.png"
              alt="Bradley Corro"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-secondary">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDownCircle className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero