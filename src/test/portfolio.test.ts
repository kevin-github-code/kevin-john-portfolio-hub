import { describe, expect, it } from 'vitest';
import { contactSchema, createContactLink } from '@/lib/contact';
import { projects } from '@/data/projects';
describe('Portfolio rules', () => {
  it('uses the supplied ALKINI technologies', () => { expect(projects.find(p => p.slug === 'alkini')?.technologies).toEqual(['Laravel','PHP','Linux','SMTP']); });
  it('does not invent unconfirmed queue project technologies', () => { expect(projects.find(p => p.slug === 'gestao-filas')?.technologies).toEqual([]); });
  it('addresses messages to the email from the CV and safely encodes input', () => { const url=createContactLink({name:'Kevin & John',email:'test@example.com',message:'Hello & welcome to the portfolio'}); expect(url.startsWith('mailto:kevin.johnpm@gmail.com?')).toBe(true); expect(url).toContain('Kevin%20%26%20John'); });
  it('rejects malformed contact input', () => { expect(contactSchema.safeParse({name:'x',email:'invalid',message:'short'}).success).toBe(false); });
});
