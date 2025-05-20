import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <AlertTriangle className="h-24 w-24 text-destructive mb-8" />
      <h1 className="text-5xl font-bold text-primary mb-4">404 - Página No Encontrada</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        ¡Ups! Parece que la página que buscas se ha escondido entre las hojas o no existe.
      </p>
      <Button asChild size="lg">
        <Link href="/">Volver a la Página Principal</Link>
      </Button>
    </div>
  )
}
