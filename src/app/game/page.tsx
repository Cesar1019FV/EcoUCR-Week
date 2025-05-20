import { Gamepad2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GamePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <Gamepad2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary">Juego Interactivo EcoDesafío</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ¡Pon a prueba tus conocimientos ambientales y diviértete aprendiendo!
        </p>
      </header>

      <div className="bg-card p-8 md:p-12 rounded-xl shadow-xl text-center max-w-2xl mx-auto">
        <Zap className="h-20 w-20 text-accent mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-semibold text-card-foreground mb-6">
          ¡Prepárate para el EcoDesafío!
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Nuestro mini-juego interactivo sobre temas ambientales está casi listo. 
          Será una forma divertida y educativa de participar en la Semana Ambiental.
        </p>
        <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            <img 
                src="https://placehold.co/600x400.png" 
                alt="Placeholder para el juego" 
                data-ai-hint="nature game interface" 
                className="w-full h-full object-cover"
            />
        </div>
        <p className="text-xl font-medium text-primary mb-2">
          ¡Próximamente!
        </p>
        <p className="text-muted-foreground mb-8">
          Estamos trabajando en los últimos detalles para que disfrutes de una experiencia increíble.
        </p>
        <Button asChild size="lg">
          <Link href="/">Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  );
}
