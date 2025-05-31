import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FactsPage() {
  const facts = [
    { title: "Ahorro de Agua", text: "Cerrar el grifo mientras te cepillas los dientes puede ahorrar hasta 8 galones de agua al día." , hint: "water saving", imageUrl: "/img/ahorrodeagua.png"},
    { title: "Reciclaje de Papel", text: "Reciclar una tonelada de papel puede salvar 17 árboles, 7,000 galones de agua y 3.3 yardas cúbicas de espacio en vertederos.", hint: "paper recycling", imageUrl: "/img/reciclajedepapel.png"},
    { title: "Energía Renovable", text: "La energía solar es la fuente de energía más abundante en la Tierra. ¡Suficiente energía solar llega a la Tierra cada hora para alimentar al mundo durante un año!", hint: "solar energy", imageUrl: "/img/energiarenovable.png"},
    { title: "Reducción de Plástico", text: "Se estima que para 2050 habrá más plástico que peces en los océanos por peso si no cambiamos nuestros hábitos.", hint: "plastic pollution ocean", imageUrl: "/img/reducciondeplastico.png"},
    { title: "Deforestación", text: "Cada minuto se pierde un área de bosque tropical equivalente a 27 campos de fútbol debido a la deforestación.", hint: "deforestation impact", imageUrl: "/img/deforestacion.png"},
    { title: "Contaminación del Aire", text: "La contaminación del aire interior puede ser hasta 5 veces peor que la exterior, debido a productos químicos en limpiadores, muebles y materiales de construcción.", hint: "air pollution indoor", imageUrl: "/img/contaminaciondelaire.png"},
    { title: "Desperdicio de Alimentos", text: "Aproximadamente un tercio de todos los alimentos producidos para el consumo humano se pierde o desperdicia cada año.", hint: "food waste", imageUrl: "/img/desperdiciodealimento.png"},
    { title: "Importancia de las Abejas", text: "Las abejas son responsables de polinizar alrededor del 75% de los cultivos alimentarios del mundo. Su disminución es una amenaza para la seguridad alimentaria.", hint: "bees pollination", imageUrl: "/img/importanciadelasabejas.png"},
    { title: "Huella de Carbono de la Ropa", text: "La industria de la moda es responsable de aproximadamente el 10% de las emisiones globales de carbono.", hint: "fast fashion impact", imageUrl: "/img/huelladecarbonodelaropa.png"},
    { title: "Consumo de Agua Embotellada", text: "Se necesitan aproximadamente 3 litros de agua para producir una botella de plástico de 1 litro de agua.", hint: "bottled water environment", imageUrl: "/img/aguaembotellada.png"},
    { title: "Energía Eólica", text: "Una sola turbina eólica puede generar suficiente electricidad para alimentar hasta 1,400 hogares.", hint: "wind turbine energy", imageUrl: "/img/energiaeolica.png"},
    { title: "Océanos Ácidos", text: "Los océanos absorben aproximadamente una cuarta parte del CO2 emitido por actividades humanas, lo que provoca la acidificación del océano y daña la vida marina.", hint: "ocean acidification coral", imageUrl: "/img/oceanosacidos.png"},
    { title: "Transporte Sostenible", text: "Usar la bicicleta en lugar del coche para trayectos cortos puede reducir tus emisiones de carbono hasta en un 75%.", hint: "cycling city", imageUrl: "/img/transportesostenible.png"},
    { title: "Impacto de la Ganadería", text: "La ganadería es una de las principales causas de emisiones de gases de efecto invernadero, deforestación y consumo de agua.", hint: "livestock impact", imageUrl: "/img/impactoganaderia.png"},
    { title: "Compostaje", text: "Compostar los residuos orgánicos puede reducir la cantidad de basura que va a los vertederos en aproximadamente un 30%.", hint: "composting garden", imageUrl: "/img/compostaje.png"},
    { title: "Luces LED", text: "Las bombillas LED consumen hasta un 80% menos de energía y duran hasta 25 veces más que las bombillas incandescentes tradicionales.", hint: "led light bulb", imageUrl: "/img/lucesled.png"},
    { title: "Microplásticos", text: "Se han encontrado microplásticos en casi todos los rincones del planeta, desde las fosas oceánicas más profundas hasta el aire que respiramos.", hint: "microplastic pollution", imageUrl: "/img/microplasticos.png"},
    { title: "Especies en Peligro", text: "Más de 40,000 especies están amenazadas de extinción, principalmente debido a la actividad humana.", hint: "endangered species", imageUrl: "/img/especiesenpeligro.png"},
    { title: "Agua Dulce Limitada", text: "Solo el 2.5% del agua de la Tierra es dulce, y de esa cantidad, menos del 1% es fácilmente accesible para el uso humano.", hint: "freshwater source", imageUrl: "/img/aguadulcelimitada.png"},
    { title: "Beneficios de los Árboles Urbanos", text: "Los árboles en las ciudades pueden reducir la temperatura del aire hasta en 8°C, disminuyendo la necesidad de aire acondicionado.", hint: "urban trees city", imageUrl: "/img/arbolesurbanos.png"},
    { title: "Contaminación Lumínica", text: "La luz artificial excesiva no solo desperdicia energía, sino que también afecta los patrones de sueño de los humanos y el comportamiento de los animales nocturnos.", hint: "light pollution night", imageUrl: "/img/contaminacionluminica.png"},
    { title: "Ropa de Segunda Mano", text: "Comprar ropa de segunda mano ayuda a reducir la demanda de producción nueva, ahorrando agua, energía y disminuyendo residuos textiles.", hint: "thrift store clothes", imageUrl: "/img/ropadesegundamano.png"},
    { title: "Productos de Limpieza Ecológicos", text: "Muchos productos de limpieza convencionales contienen químicos tóxicos. Optar por alternativas ecológicas protege tu salud y el medio ambiente.", hint: "eco friendly cleaning", imageUrl: "/img/productosdelimpiezaeco.png"},
    { title: "Jardines Verticales", text: "Los jardines verticales no solo embellecen los espacios urbanos, sino que también mejoran la calidad del aire y pueden aislar edificios.", hint: "vertical garden building", imageUrl: "/img/jardinesverticales.png"}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facts.map((fact, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{fact.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground">{fact.text}</p>
              <div className="mt-4 h-48 w-full relative overflow-hidden rounded-md bg-muted">
                <img 
                  src={fact.imageUrl}
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

