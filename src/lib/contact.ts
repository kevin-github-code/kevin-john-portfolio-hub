import { z } from 'zod';
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});
export function createContactLink(input: unknown) {
  const data = contactSchema.parse(input);
  return `mailto:kevin.johnpm@gmail.com?subject=${encodeURIComponent(`Portfolio — ${data.name}`)}&body=${encodeURIComponent(`${data.name}\n${data.email}\n\n${data.message}`)}`;
}