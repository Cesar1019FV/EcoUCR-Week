import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ResourceItem {
  title: string;
  description: string;
  fileType: 'PDF' | 'PNG' | 'JPG';
  icon: React.ElementType;
  downloadLink: string; // Placeholder, actual files would be hosted
  imageHint: string;
}

const resources: ResourceItem[] = [
  {
    title: "Flyer Oficial Semana Ambiental",
    description: "Flyer promocional del evento con información general y cronograma resumido.",
    fileType: "PDF",
    icon: FileText,
    downloadLink: "#", // Replace with actual link
    imageHint: "event flyer"
  },
  {
    title: "Póster: 5 Acciones por el Planeta",
    description: "Póster infográfico con 5 acciones clave para cuidar el medio ambiente.",
    fileType: "PNG",
    icon: ImageIcon,
    downloadLink: "#", // Replace with actual link
    imageHint: "infographic poster environment"
  },
  {
    title: "Guía de Reciclaje UCR",
    description: "Guía detallada sobre cómo reciclar correctamente en el campus universitario.",
    fileType: "PDF",
    icon: FileText,
    downloadLink: "#", // Replace with actual link
    imageHint: "recycling guide"
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <Download className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary">Materiales Gráficos</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Descarga flyers, pósters y otros materiales para ayudarnos a difundir la Semana Ambiental.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center text-primary mb-2">
                <resource.icon className="h-6 w-6 mr-2" />
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </div>
               <div className="mt-4 h-48 w-full relative overflow-hidden rounded-md bg-muted">
                <img 
                  src={`https://placehold.co/400x300.png?text=${encodeURIComponent(resource.fileType)}`} 
                  alt={`${resource.title} preview`}
                  data-ai-hint={resource.imageHint}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group" disabled={resource.downloadLink === "#"}>
                <a href={resource.downloadLink} download target="_blank" rel="noopener noreferrer">
                  Descargar ({resource.fileType})
                  <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <p className="mt-12 text-center text-muted-foreground">
          Más recursos se añadirán próximamente. ¡Gracias por tu apoyo!
          {resources.some(r => r.downloadLink === "#") && <span className="block text-sm">(Enlaces de descarga son placeholders)</span>}
        </p>
    </div>
  );
}
