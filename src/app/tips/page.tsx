import TipGeneratorForm from './TipGeneratorForm';
import { Leaf } from 'lucide-react';

export default function TipsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary">Consejos Ambientales con IA</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubre cómo pequeñas acciones pueden tener un gran impacto. Nuestro generador de IA te ofrece consejos personalizados para un estilo de vida más ecológico.
        </p>
      </header>
      
      <div className="flex justify-center">
        <TipGeneratorForm />
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-primary mb-4">¿Por qué son importantes estos consejos?</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Adoptar hábitos sostenibles es crucial para proteger nuestros ecosistemas, conservar recursos naturales y mitigar el cambio climático. Cada gesto cuenta, y juntos podemos marcar la diferencia para un planeta más saludable.
        </p>
      </section>
    </div>
  );
}
