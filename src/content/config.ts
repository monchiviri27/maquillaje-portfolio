// src/content/config.ts

import { defineCollection, z } from 'astro:content';

// 1. ESQUEMA PARA LA COLECCIÓN DE SERVICIOS
const servicioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(), 
        shortDescription: z.string().max(160, 'La descripción es demasiado larga para listados.'),
        category: z.enum(['Novias', 'Eventos', 'Masterclass']),
        price: z.string().optional(),
        image: z.string(), 
        isFeatured: z.boolean().default(false), 
        order: z.number().default(99), 
    }),
});

// 2. ESQUEMA PARA LA COLECCIÓN DE PORTAFOLIO - CORREGIDO
const portfolioCollection = defineCollection({
    type: 'content', // CAMBIADO de 'data' a 'content' para archivos .md
    schema: z.object({
        title: z.string(),
        type: z.enum(['Novia', 'Social', 'Editorial', 'Prueba']),
        description: z.string(),
        images: z.array(z.string()), 
        date: z.date(),
    }),
});

// Exporta tus colecciones
export const collections = {
    'servicios': servicioCollection,
    'portfolio': portfolioCollection,
};