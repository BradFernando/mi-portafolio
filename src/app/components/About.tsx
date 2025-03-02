"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Cambiado a whileInView
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }} // Añadido viewport
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">01.</span> Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }} // Cambiado a whileInView
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }} // Añadido viewport
          >
            <p className="text-gray-300 mb-6">
              Mi experiencia abarca desde el diseño de bases de datos y gestión hasta la implementación de soluciones en
              la nube y desarrollo de aplicaciones web y móviles, garantizando eficiencia y seguridad en cada proyecto.
            </p>
            <p className="text-gray-300 mb-6">
              Además, poseo sólidas habilidades en redes y ciberseguridad, aplicando prácticas avanzadas para proteger
              la información en infraestructuras complejas.
            </p>
            <p className="text-gray-300 mb-6">
              Mi enfoque en soluciones personalizadas me permite crear entornos robustos y escalables, perfectamente
              adaptados a las necesidades específicas de cada cliente, combinando innovación y fiabilidad en cada
              sistema que desarrollo.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Educación</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Ingeniería en Tecnologías de la Información</li>
                  <li>• Universidad de las Fuerzas Armadas - ESPE</li>
                  <li>• 2019 - 2024</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">Certificaciones</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Certified in Cybersecurity</li>
                  <li>• Ethical Hacking Professional</li>
                  <li>• AWS Certified Solutions Architect</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }} // Cambiado a whileInView
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }} // Añadido viewport
            className="relative"
          >
            <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-secondary">
              <Image
                src="https://i.ibb.co/fdTTwv5/avatar-pc-developer.png"
                alt="Bradley Corro - Software Developer"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About