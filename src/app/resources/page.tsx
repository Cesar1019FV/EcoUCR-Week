import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ResourceItem {
  title: string;
  description: string;
  fileType: 'PDF' | 'PNG' | 'JPG';
  icon: React.ElementType;
  downloadLink: string;
  imageHint: string;
  imageUrl: string;
}

const resources: ResourceItem[] = [
  {
    title: "Día Mundial del Medio Ambiente - TCU",
    description: "Imagen alusiva al Día Mundial del Medio Ambiente, utilizada en el TCU.",
    fileType: "PNG",
    icon: ImageIcon,
    downloadLink: "/resources/Día Mundial del Medio Ambiente - TCU.png",
    imageHint: "Día Mundial del Medio Ambiente TCU imagen",
    imageUrl: "/img/img_resources/diadelambiente.png"
  },
  {
    title: "Buenas Prácticas Ambientales en la Facultad",
    description: "Documento PDF con recomendaciones de buenas prácticas ambientales en la facultad.",
    fileType: "PDF",
    icon: FileText,
    downloadLink: "/resources/Buenas Prácticas Ambientales en la Facultad.pdf",
    imageHint: "Buenas prácticas ambientales facultad",
    imageUrl: "/img/img_resources/facultad.png"
  },
  {
    title: "Buenas Prácticas Ambientales en la Universidad",
    description: "Documento PDF con recomendaciones de buenas prácticas ambientales en la universidad.",
    fileType: "PDF",
    icon: FileText,
    downloadLink: "/resources/Buenas Prácticas Ambientales en la Universidad de Costa Rica.pdf",
    imageHint: "Buenas prácticas ambientales universidad",
    imageUrl: "/img/img_resources/universidad.png"
  },
  {
    title: "Ambiente en Costa Rica",
    description: "Documento PDF sobre el estado y retos del ambiente en Costa Rica.",
    fileType: "PDF",
    icon: FileText,
    downloadLink: "/resources/Ambiente en Costa Rica.pdf",
    imageHint: "Ambiente Costa Rica PDF",
    imageUrl: "/img/img_resources/costarica.png"
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
                  src={resource.imageUrl}
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
