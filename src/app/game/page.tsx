"use client";

import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Droplets, Pizza, Megaphone, Coffee, Bus, Award, RotateCcw, Sprout, Leaf, Trees, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Added import for cn

interface Choice {
  text: string;
  scoreChange: number;
  feedback: string;
}

interface Scene {
  id: number;
  day: string;
  title: string;
  scenario: string;
  imageHint: string;
  icon: React.ElementType;
  choices: Choice[];
}

const gameScenes: Scene[] = [
  {
    id: 1,
    day: "Lunes - Mañana",
    title: "¡Sed Inesperada!",
    scenario: "Llegaste a la U después de un viaje caluroso y olvidaste tu botella reutilizable. ¡Necesitas hidratarte ya!",
    imageHint: "student thirsty campus",
    icon: Droplets,
    choices: [
      { text: "Comprar botella de plástico", scoreChange: -5, feedback: "Las botellas de plástico tardan cientos de años en degradarse y muchas terminan en nuestros océanos. ¡Cada una que evitamos cuenta!" },
      { text: "Buscar un bebedero público", scoreChange: 9, feedback: "¡Excelente! Usar bebederos reduce masivamente los residuos plásticos y es una opción saludable y gratuita." },
    ],
  },
  {
    id: 2,
    day: "Lunes - Mediodía",
    title: "El Dilema de la Pizza",
    scenario: "Almuerzo rápido: pizza. Ahora tienes la caja de cartón manchada de grasa. ¿Qué haces con ella?",
    imageHint: "pizza box recycling",
    icon: Pizza,
    choices: [
      { text: "Al contenedor azul (papel)", scoreChange: -3, feedback: "El cartón con grasa o restos de comida contamina el reciclaje de papel. Si está muy sucio, no se puede reciclar." },
      { text: "Al basurero común", scoreChange: 3, feedback: "Correcto. Si el cartón está muy grasoso y no hay opción de compostaje, el basurero común es el destino adecuado para no contaminar el reciclaje." },
      { text: "Llevarla para compostar", scoreChange: 9, feedback: "¡Genial! El cartón (sin demasiado plástico o tinta) puede compostarse, convirtiéndose en abono y cerrando el ciclo." },
    ],
  },
  {
    id: 3,
    day: "Martes - Tarde",
    title: "Promocionando el Evento",
    scenario: "Estás ayudando a organizar un evento académico. Necesitan promocionarlo entre los estudiantes para asegurar una buena asistencia.",
    imageHint: "student event promotion digital",
    icon: Megaphone,
    choices: [
      { text: "Sugerir solo redes y códigos QR", scoreChange: 9, feedback: "¡Muy bien! La promoción digital es efectiva, medible y ahorra una gran cantidad de papel y recursos de impresión." },
      { text: "Imprimir volantes en papel reciclado", scoreChange: 5, feedback: "El papel reciclado es una mejor opción que el papel virgen, pero la promoción digital sigue siendo superior en sostenibilidad." },
      { text: "Imprimir 200 volantes estándar", scoreChange: -3, feedback: "Muchos volantes terminan en la basura sin ser leídos. Considera alternativas más ecológicas y efectivas." },
    ],
  },
  {
    id: 4,
    day: "Miércoles - Media Tarde",
    title: "Pausa para el Café",
    scenario: "Un cafecito para recargar energías después de una clase intensa. Pasas por tu cafetería favorita de la U.",
    imageHint: "reusable coffee cup student",
    icon: Coffee,
    choices: [
      { text: "Usar mi vaso reutilizable", scoreChange: 9, feedback: "¡Perfecto! Llevar tu propio vaso es un hábito simple que reduce significativamente el desperdicio de vasos desechables." },
      { text: "Pedir en vaso desechable con tapa", scoreChange: -3, feedback: "Los vasos desechables, tapas y pajillas generan una enorme cantidad de basura plástica que a menudo no se recicla." },
    ],
  },
  {
    id: 5,
    day: "Viernes - Tarde",
    title: "De Vuelta a Casa",
    scenario: "Terminó la semana de clases. Es hora de volver a casa, y estás evaluando la forma más rápida y cómoda.",
    imageHint: "student public transport",
    icon: Bus,
    choices: [
      { text: "Compartir ride con una amiga", scoreChange: 5, feedback: "Compartir el viaje es una buena forma de reducir emisiones por persona y optimizar el uso del vehículo." },
      { text: "Tomar el bus público", scoreChange: 9, feedback: "¡Excelente elección! El transporte público es una de las formas más sostenibles y eficientes de moverse en la ciudad." },
      { text: "Pedir un Uber solo para mí", scoreChange: 0, feedback: "Viajar solo en auto genera más emisiones y congestión. Es la opción menos eficiente si hay alternativas disponibles." },
    ],
  },
];

const scoreLevels = [
  { limit: 15, title: "Eco-Novato", description: "¡Todos empezamos por algo! Ya diste tu primer paso hacia la sostenibilidad. Sigue aprendiendo y verás grandes cambios.", icon: Sprout, imageHint: "seedling growing hand" },
  { limit: 30, title: "Eco-Aprendiz", description: "Vas por buen camino, ¡sigue así! Algunas decisiones aún pueden mejorar, pero tu conciencia ambiental está creciendo.", icon: Leaf, imageHint: "young tree sunlight" },
  { limit: 45, title: "Guardián Verde", description: "¡Felicidades! Eres un verdadero Guardián del Planeta U. Tus decisiones demuestran un gran compromiso con el medio ambiente. ¡Inspira a otros!", icon: Trees, imageHint: "lush forest thriving" },
];

const MAX_SCORE = 45;

const GamePage: NextPage = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [lastFeedback, setLastFeedback] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDecision = (choiceIndex: number) => {
    const currentScene = gameScenes[currentSceneIndex];
    const chosenOption = currentScene.choices[choiceIndex];

    const newScore = Math.max(0, Math.min(MAX_SCORE, playerScore + chosenOption.scoreChange));
    setPlayerScore(newScore);
    setLastFeedback(chosenOption.feedback);

    if (currentSceneIndex < gameScenes.length - 1) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const getGameResult = () => {
    for (const level of scoreLevels) {
      if (playerScore <= level.limit) {
        return level;
      }
    }
    return scoreLevels[scoreLevels.length - 1]; // Should be Guardián Verde
  };

  const restartGame = () => {
    setCurrentSceneIndex(0);
    setPlayerScore(0);
    setLastFeedback(null);
    setGameOver(false);
    setShowWelcome(true);
  };
  
  const startGame = () => {
    setShowWelcome(false);
    // Reset states just in case, for potential re-plays without full restart
    setCurrentSceneIndex(0);
    setPlayerScore(0);
    setLastFeedback(null);
    setGameOver(false);
  };

  if (!isMounted) {
    // Basic skeleton or loading state to avoid hydration issues
    return (
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Cargando juego...</p>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <header className="mb-10">
          <Gamepad2 className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-primary">Guardianes del Planeta U</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            ¡Bienvenido/a! En este juego, tus decisiones diarias como estudiante universitario impactarán la "Salud del Planeta". ¿Estás listo/a para el desafío?
          </p>
        </header>
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="p-6">
            <Image
              src="/img/img_landing/guardianesplanetaU.png"
              alt="Bienvenida al juego Guardianes del Planeta U"
              width={600}
              height={400}
              className="rounded-md mb-6 object-cover"
              data-ai-hint="university students nature friendly"
            />
            <p className="text-muted-foreground mb-6">
              A lo largo de una semana simulada, te enfrentarás a situaciones cotidianas. Cada elección tiene consecuencias. ¡Aprende y diviértete!
            </p>
            <Button onClick={startGame} size="lg" className="w-full">
              Empezar Aventura
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }


  if (gameOver) {
    const result = getGameResult();
    const ResultIcon = result.icon;
    return (
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <header className="mb-10">
          <Award className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-primary">¡Aventura Completada!</h1>
        </header>
        <Card className="w-full max-w-lg shadow-xl">
          <CardHeader>
            <ResultIcon className="h-16 w-16 text-accent mx-auto mb-4" />
            <CardTitle className="text-3xl text-center text-primary">{result.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-2xl font-semibold text-muted-foreground mb-4">
              Salud del Planeta: <span className="text-primary">{playerScore} / {MAX_SCORE}</span>
            </p>
             <Image
                src="/img/arbolesurbanos.png"
                alt={result.title}
                width={600}
                height={400}
                className="rounded-md mb-4 object-cover"
                data-ai-hint={result.imageHint}
              />
            <p className="text-muted-foreground text-lg mb-6">{result.description}</p>
            <Button onClick={restartGame} size="lg" className="w-full">
              <RotateCcw className="mr-2 h-5 w-5" />
              Jugar de Nuevo
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentScene = gameScenes[currentSceneIndex];
  const SceneIcon = currentScene.icon;

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center">
      <header className="text-center mb-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-primary mb-1">{currentScene.day}</h1>
        <p className="text-xl text-muted-foreground">{currentScene.title}</p>
      </header>

      <Card className="w-full max-w-2xl shadow-xl mb-8">
        <CardHeader>
          <SceneIcon className="h-12 w-12 text-accent mx-auto mb-4" />
          <CardTitle className="text-2xl text-center">{currentScene.scenario}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-[16/9] relative w-full mb-6">
            <Image
              src={currentScene.id === 1 ? "/img/aguaembotellada.png" :
                   currentScene.id === 2 ? "/img/compostaje.png" :
                   currentScene.id === 3 ? "/img/consumodepapel.png" :
                   currentScene.id === 4 ? "/img/img_resources/cafecito.png" :
                   "/img/transportesostenible.png"}
              alt={currentScene.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              data-ai-hint={currentScene.imageHint}
            />
          </div>
          <div className="space-y-3">
            {currentScene.choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleDecision(index)}
                variant="outline"
                className="w-full text-left justify-start p-4 h-auto text-base"
                size="lg"
              >
                {choice.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-primary">Salud del Planeta</span>
            <span className="text-sm font-medium text-primary">{playerScore} / {MAX_SCORE}</span>
        </div>
        <Progress value={(playerScore / MAX_SCORE) * 100} className="w-full h-4" />
      </div>

      {lastFeedback && (
        <Card className="w-full max-w-2xl shadow-lg bg-accent/20 border-accent">
          <CardContent className="p-6">
            <p className="text-accent-foreground text-center">{lastFeedback}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Helper component for loading state to prevent hydration errors
const Loader2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("animate-spin", className)}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);


export default GamePage;

