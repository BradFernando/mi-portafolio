import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">Diseñado y desarrollado por Bradley Corro © {new Date().getFullYear()}</p>
        <p className="text-gray-500 text-sm mt-2">Construido con Next.js, React, TypeScript y Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer

