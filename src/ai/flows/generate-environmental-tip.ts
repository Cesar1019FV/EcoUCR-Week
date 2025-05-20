'use server';

/**
 * @fileOverview An AI agent that generates environmental tips.
 *
 * - generateEnvironmentalTip - A function that generates an environmental tip.
 * - GenerateEnvironmentalTipInput - The input type for the generateEnvironmentalTip function.
 * - GenerateEnvironmentalTipOutput - The return type for the generateEnvironmentalTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEnvironmentalTipInputSchema = z.object({
  topic: z
    .string()
    .optional()
    .describe('Optional topic to guide the environmental tip generation.'),
});
export type GenerateEnvironmentalTipInput = z.infer<
  typeof GenerateEnvironmentalTipInputSchema
>;

const GenerateEnvironmentalTipOutputSchema = z.object({
  tip: z.string().describe('A practical environmental tip.'),
});
export type GenerateEnvironmentalTipOutput = z.infer<
  typeof GenerateEnvironmentalTipOutputSchema
>;

export async function generateEnvironmentalTip(
  input: GenerateEnvironmentalTipInput
): Promise<GenerateEnvironmentalTipOutput> {
  return generateEnvironmentalTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEnvironmentalTipPrompt',
  input: {schema: GenerateEnvironmentalTipInputSchema},
  output: {schema: GenerateEnvironmentalTipOutputSchema},
  prompt: `You are an AI assistant that generates practical and easy-to-follow environmental tips for daily sustainable living.

  Generate a single environmental tip based on the following optional topic: {{{topic}}}
  If no topic is provided, generate a general environmental tip.
  The tip should be concise and actionable.
  Genera el consejo en español.
  `,
});

const generateEnvironmentalTipFlow = ai.defineFlow(
  {
    name: 'generateEnvironmentalTipFlow',
    inputSchema: GenerateEnvironmentalTipInputSchema,
    outputSchema: GenerateEnvironmentalTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
