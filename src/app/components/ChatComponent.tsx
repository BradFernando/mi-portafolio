'use client'; // Marca este componente como un componente de cliente

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { bradleyProfile } from './addons/data';
import { X } from 'lucide-react'; // Importa un ícono para el botón de cerrar

const systemPrompt = `
  Eres un asistente virtual especializado en el portafolio de ${bradleyProfile.nombreCompleto}. 
  Tu objetivo es responder preguntas sobre sus proyectos, habilidades, experiencia laboral, estudios y certificaciones. 
  No debes salirte de este contexto bajo ninguna circunstancia. 
  Si te preguntan algo fuera de este contexto, responde amablemente que solo puedes hablar sobre el perfil profesional de Bradley.

  Información clave sobre Bradley:
  - Nombre completo: ${bradleyProfile.nombreCompleto}
  - Estudios: 
    - Primaria: ${bradleyProfile.estudios.primaria}
    - Secundaria: ${bradleyProfile.estudios.secundaria}
    - Tercer Nivel: ${bradleyProfile.estudios.tercerNivel}
  - Experiencia Laboral:
    ${bradleyProfile.experienciaLaboral
      .map(
        (exp) => `- ${exp.puesto} en ${exp.empresa} (${exp.fecha})`
      )
      .join("\n")}
  - Certificaciones: ${bradleyProfile.certificaciones.join(", ")}
  - Enlaces:
    - LinkedIn: ${bradleyProfile.enlaces.linkedin}
    - GitHub: ${bradleyProfile.enlaces.github}

  Reglas:
  1. Solo responde preguntas relacionadas con el perfil profesional de Bradley.
  2. Si te preguntan algo fuera de este contexto, responde: "Solo puedo responder preguntas relacionadas con el perfil profesional de Bradley."
  3. Mantén un tono profesional y amable en todas las respuestas.
  4. Las respuestas deben ser precisas y no demasiado extensas.
`;

// Importa DeepChat dinámicamente
const DeepChat = dynamic(
  () => import('deep-chat-react').then((module) => module.DeepChat),
  { ssr: false }
);

export default function ChatComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-90 h-[355px]' : 'w-10 h-10'
      }`}
    >
      <div
        className="w-full h-full bg-card border border-border rounded-lg shadow-lg overflow-hidden"
        onClick={() => {
          // Evita que el chat se minimice al tocar el contenido interno
          if (!isExpanded) {
            setIsExpanded(true);
          }
        }}
      >
        {isExpanded && (
          <div className="w-full h-full flex flex-col relative">
            {/* Botón de minimizado */}
            <button
              className="absolute top-2 right-2 p-1 rounded-full bg-background/50 hover:bg-background/80 transition-colors z-50"
              onClick={() => {
                setIsExpanded(false);
              }}
            >
              <X className="w-4 h-4 text-primary" /> {/* Ícono de cerrar */}
            </button>

            {/* Contenido del chat */}
            <div className="flex-1 overflow-y-auto">
              <DeepChat
                connect={{ stream: true }}
                directConnection={{
                  openAI: {
                    key: process.env.NEXT_PUBLIC_OPENAI_KEY,
                    chat: {
                      max_tokens: 100,
                      system_prompt: systemPrompt, // Usa el system_prompt generado
                    },
                  },
                }}
                style={{
                  background: '#1e293b', // Color de fondo oscuro (similar a --card)
                  borderRadius: '10px',
                }}
                textInput={{
                  placeholder: {
                    text: 'Escribe un mensaje...',
                  },
                  styles: {
                    container: {
                      backgroundColor: '#334155', // Color de fondo del input (similar a --input)
                      border: '1px solid #475569', // Color del borde (similar a --border)
                      borderRadius: '0.5rem',
                    },
                    text: {
                      color: '#f8fafc', // Color del texto (similar a --foreground)
                    },
                  },
                }}
              >
                {/* Intro Panel */}
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#1e293b', // Fondo oscuro
                    borderRadius: '10px',
                    padding: '16px',
                    textAlign: 'center',
                    color: '#f8fafc', // Texto claro
                  }}
                >
                  <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                    Hola, soy BotBrad
                  </div>
                  <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Especializado en comentar acerca del perfil de Bradley. ¿En qué puedo ayudarte?
                  </div>
                </div>
              </DeepChat>
            </div>
          </div>
        )}

        {!isExpanded && (
          <div className="flex items-center justify-center w-full h-full cursor-pointer">
            <span className="text-primary text-lg">💬</span>
          </div>
        )}
      </div>
    </div>
  );
}