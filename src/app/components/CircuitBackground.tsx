"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const CircuitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        drawCircuits()
      }
    }

    window.addEventListener("resize", resizeCanvas)

    const drawCircuits = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set styles
      ctx.strokeStyle = "#64ffda"
      ctx.lineWidth = 1

      // Draw circuit patterns
      const gridSize = 50
      const nodeRadius = 3

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Only draw some nodes (random)
          if (Math.random() > 0.7) {
            // Draw node
            ctx.beginPath()
            ctx.arc(x, y, nodeRadius, 0, Math.PI * 2)
            ctx.fillStyle = Math.random() > 0.8 ? "#64ffda" : "#0a192f"
            ctx.fill()

            // Draw connections
            if (Math.random() > 0.5) {
              ctx.beginPath()
              ctx.moveTo(x, y)

              // Decide direction
              const direction = Math.floor(Math.random() * 4)
              let endX = x,
                endY = y

              switch (direction) {
                case 0: // Right
                  endX = x + gridSize
                  break
                case 1: // Down
                  endY = y + gridSize
                  break
                case 2: // Left
                  endX = x - gridSize
                  break
                case 3: // Up
                  endY = y - gridSize
                  break
              }

              ctx.lineTo(endX, endY)
              ctx.stroke()
            }
          }
        }
      }
    }

    drawCircuits()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />
}

export default CircuitBackground

