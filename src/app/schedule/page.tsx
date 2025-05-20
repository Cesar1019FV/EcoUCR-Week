import { CalendarDays } from 'lucide-react';

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <CalendarDays className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary">Cronograma de Eventos</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explora todas las actividades de la Semana Ambiental. Próximamente podrás filtrar por fecha, tipo y ubicación.
        </p>
      </header>

      <div className="bg-card p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-card-foreground mb-6">Calendario de Actividades</h2>
        <div className="space-y-8">
          {/* Placeholder for schedule items */}
          {[
            { time: "Lunes, 9:00 AM", title: "Charla Inaugural: Nuestro Planeta, Nuestro Futuro", location: "Auditorio Principal" },
            { time: "Martes, 2:00 PM", title: "Taller de Reciclaje Creativo", location: "Sala Multiusos B" },
            { time: "Miércoles, 11:00 AM", title: "Cine Ambiental: Documental 'Terra'", location: "Aula Magna" },
            { time: "Jueves, Todo el día", title: "Feria de Proyectos Sostenibles", location: "Plaza Central" },
            { time: "Viernes, 4:00 PM", title: "Siembra de Árboles Nativos", location: "Jardín Botánico Universitario" },
          ].map((event, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-1"><span className="font-medium">Hora:</span> {event.time}</p>
              <p className="text-sm text-muted-foreground"><span className="font-medium">Lugar:</span> {event.location}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          El cronograma interactivo completo estará disponible muy pronto. ¡Vuelve a visitarnos!
        </p>
      </div>
    </div>
  );
}
