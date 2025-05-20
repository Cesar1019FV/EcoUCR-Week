"use client";

import { useState, useTransition } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Label wasn't used, but keeping for consistency if needed later
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea"; // Textarea wasn't used here
import { useToast } from "@/hooks/use-toast";
import { generateEnvironmentalTip, GenerateEnvironmentalTipInput } from '@/ai/flows/generate-environmental-tip';
import { Loader2, Wand2 } from 'lucide-react';

// Moved formSchema inside the component as it's only used here
// const formSchema = z.object({
//   topic: z.string().optional(),
// });

export default function TipGeneratorForm() {
  const [tip, setTip] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const formSchema = z.object({
    topic: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      setTip(null); 
      try {
        const input: GenerateEnvironmentalTipInput = { topic: values.topic || undefined };
        const result = await generateEnvironmentalTip(input);
        if (result && result.tip) {
          setTip(result.tip);
          toast({
            title: "¡Consejo generado!",
            description: "Aquí tienes un nuevo consejo ambiental.",
          });
        } else {
          throw new Error("No se pudo generar el consejo.");
        }
      } catch (error) {
        console.error("Error generating tip:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Hubo un problema al generar el consejo. Inténtalo de nuevo.",
        });
      }
    });
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wand2 className="mr-2 h-6 w-6 text-primary" />
          Generador de Consejos Ambientales
        </CardTitle>
        <CardDescription>
          Obtén un consejo práctico para una vida más sostenible. Opcionalmente, escribe un tema para guiar la generación del consejo.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="topic">Tema (opcional)</FormLabel>
                  <FormControl>
                    <Input 
                      id="topic" 
                      placeholder="Ej: ahorro de agua, reciclaje, energía..." 
                      {...field} 
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {tip && (
              <div className="mt-6 p-4 bg-accent/30 rounded-md border border-accent">
                <h3 className="text-lg font-semibold text-primary mb-2">Consejo Ambiental:</h3>
                <p className="text-foreground">{tip}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generando...
                </>
              ) : (
                "Generar Consejo"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
