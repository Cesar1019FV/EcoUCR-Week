
import { CalendarDays, Zap, Recycle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function SchedulePage() {
  const events = [
    {
      date: "5 de junio",
      dayTitle: "Día Mundial del Ambiente: \"Sin Contaminación por Plásticos\"",
      icon: Zap,
      description: "Jornada de charlas y discusión sobre el impacto de los plásticos y las soluciones para mitigar su contaminación. Se abordarán temas cruciales como los microplásticos, la relación entre el cambio climático y el plástico, la situación específica en Costa Rica, y las estrategias globales y locales para combatir este desafío.",
      topics: [
        "La contaminación por plásticos, el caso de los microplásticos.",
        "Cambio Climático y el Plástico.",
        "Costa Rica y el Plástico.",
        "Estrategias y soluciones para la contaminación por plásticos."
      ],
      location: "Auditorio Principal (Ubicación por confirmar)"
    },
    {
      date: "9 de junio",
      dayTitle: "Las Sodas de la U y el Manejo de Residuos Sólidos: El Caso de Sociales e Ingenierías",
      icon: Recycle,
      description: "Análisis y propuestas sobre la gestión de residuos en los servicios de alimentación de la universidad. Se discutirán prácticas de manejo de residuos sólidos en las sodas, la importancia del reciclaje efectivo y cómo la educación ambiental y los hábitos de consumo responsable pueden marcar la diferencia.",
      topics: [
        "Manejo de los residuos sólidos en sodas.",
        "Reciclaje de los residuos sólidos.",
        "Educación ambiental y hábitos de consumo responsable."
      ],
      location: "Sala de Conferencias (Ubicación por confirmar)"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <CalendarDays className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary">Cronograma de la Semana Ambiental</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Semana Ambiental (6 al 10 de junio). ¡Participa en nuestras charlas y actividades!
        </p>
      </header>

      <div className="space-y-12">
        {events.map((event, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div className="flex items-center mb-2 sm:mb-0">
                  <event.icon className="h-10 w-10 text-accent mr-4" />
                  <CardTitle className="text-2xl text-primary">{event.dayTitle}</CardTitle>
                </div>
                <CardDescription className="text-md text-muted-foreground sm:text-right">
                  <strong>Fecha:</strong> {event.date}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-5 leading-relaxed">{event.description}</p>
              <h4 className="text-xl font-semibold text-primary mb-3">Temas Principales:</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground pl-5 mb-5">
                {event.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="leading-snug">{topic}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Lugar:</span> {event.location}
              </p>
            </CardContent>
             <CardFooter>
              <p className="text-xs text-muted-foreground">Horarios específicos serán anunciados pronto.</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="mt-16 text-center text-muted-foreground">
        Este es el cronograma de nuestras charlas principales. ¡No te las pierdas y sé parte del cambio!
      </p>
    </div>
  );
}
