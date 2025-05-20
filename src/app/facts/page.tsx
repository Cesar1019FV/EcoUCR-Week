import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FactsPage() {
  const facts = [
    { title: "Ahorro de Agua", text: "Cerrar el grifo mientras te cepillas los dientes puede ahorrar hasta 8 galones de agua al día." , hint: "water saving"},
    { title: "Reciclaje de Papel", text: "Reciclar una tonelada de papel puede salvar 17 árboles, 7,000 galones de agua y 3.3 yardas cúbicas de espacio en vertederos.", hint: "paper recycling"},
    { title: "Energía Renovable", text: "La energía solar es la fuente de energía más abundante en la Tierra. ¡Suficiente energía solar llega a la Tierra cada hora para alimentar al mundo durante un año!", hint: "solar energy"},
    { title: "Reducción de Plástico", text: "Se estima que para 2050 habrá más plástico que peces en los océanos por peso si no cambiamos nuestros hábitos.", hint: "plastic pollution ocean"},
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary">Datos Curiosos sobre el Medio Ambiente</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Aprende hechos sorprendentes y comparte el conocimiento para inspirar el cambio.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facts.map((fact, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{fact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{fact.text}</p>
              <div className="mt-4 h-40 w-full relative overflow-hidden rounded-md">
                <img 
                  src={`https://placehold.co/600x400.png?text=${encodeURIComponent(fact.title)}`} 
                  alt={fact.title} 
                  data-ai-hint={fact.hint}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
       <p className="mt-12 text-center text-muted-foreground">
          Esta sección se expandirá con más datos interactivos y visualizaciones.
        </p>
    </div>
  );
}
