import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="flex justify-center items-center mb-2">
          <Leaf className="h-5 w-5 text-primary mr-2" />
          <p>&copy; {currentYear} Semana Ambiental EcoUCR.</p>
        </div>
        <p>Universidad de Costa Rica. Todos los derechos reservados.</p>
        <p className="mt-1">
          Un evento para fomentar la conciencia y acción ambiental.
        </p>
      </div>
    </footer>
  );
}
