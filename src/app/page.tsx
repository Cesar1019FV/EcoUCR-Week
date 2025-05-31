import Image from 'next/image';
import Link from 'next/link';
import EventCard from '@/components/EventCard';
import CallToActionCard from '@/components/CallToActionCard';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Leaf, Lightbulb, Gamepad2, ArrowRight, Zap, Recycle } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
           {/* Placeholder for a subtle background pattern or image if desired */}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Leaf className="h-16 w-16 text-background mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Semana Ambiental EcoUCR
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl mb-8 text-background/90">
            Un espacio para conectar, aprender y actuar por un futuro más sostenible. Descubre el cronograma, participa en charlas, accede a recursos y diviértete con nuestros juegos interactivos.
          </p>
          <p className="text-md sm:text-lg font-semibold mb-10 text-background/80">
            Fechas Clave: 6 - 10 de Junio
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 group">
            <Link href="/schedule">
              Ver Cronograma Completo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Bienvenido/a a la Semana Ambiental
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              La Semana Ambiental de la UCR es una iniciativa dedicada a promover la conciencia ecológica y la sostenibilidad dentro de nuestra comunidad universitaria y más allá. Únete a nosotros para una semana llena de actividades enriquecedoras.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Activities Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Actividades Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Charla: Sin Contaminación por Plásticos"
              description="Únete el 5 de junio a la discusión sobre microplásticos, cambio climático y soluciones innovadoras."
              imageUrl="/img/img_landing/charla_microplasticos.png"
              imageHint="environment lecture plastics"
              linkUrl="/schedule"
              linkText="Ver Detalles"
            />
            <EventCard
              title="Juego: Guardianes del Planeta U"
              description="¡Acepta el desafío! Toma decisiones como estudiante y descubre su impacto ambiental. Aprende jugando."
              imageUrl="/img/img_landing/guardianesplanetaU.png"
              imageHint="eco game student controller"
              linkUrl="/game"
              linkText="¡Jugar Ahora!"
            />
            <EventCard
              title="Charla: Residuos en Sodas UCR"
              description="Explora el 9 de junio el manejo de residuos en las sodas de Sociales e Ingenierías y promueve el consumo responsable."
              imageUrl="/img/img_landing/residuosensodas.png"
              imageHint="university discussion waste management"
              linkUrl="/schedule"
              linkText="Más Información"
            />
          </div>
        </div>
      </section>

      {/* News Feed Placeholder Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Noticias y Actualizaciones
          </h2>
          <div className="max-w-xl mx-auto bg-muted p-8 rounded-lg shadow-md">
            <p className="text-lg text-foreground">
              ¡Mantente al tanto de las últimas novedades! Esta sección se actualizará pronto con noticias y publicaciones recientes sobre la Semana Ambiental.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              (Contenido de ejemplo - Próximamente)
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Links Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Explora Más
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CallToActionCard
              title="Cronograma Completo"
              description="No te pierdas ningún evento. Revisa los detalles de nuestras charlas."
              linkUrl="/schedule"
              linkText="Ver Cronograma"
              icon={CalendarCheck}
              className="bg-card"
            />
            <CallToActionCard
              title="Consejos AI Diarios"
              description="Recibe tips ambientales personalizados generados por IA para tu día a día."
              linkUrl="/tips"
              linkText="Obtener un Consejo"
              icon={Leaf}
              className="bg-card"
            />
            <CallToActionCard
              title="Datos Curiosos"
              description="Amplía tus conocimientos sobre el medio ambiente con hechos sorprendentes."
              linkUrl="/facts"
              linkText="Descubrir Datos"
              icon={Lightbulb} 
              className="bg-card"
            />
          </div>
        </div>
      </section>
    </>
  );
}
