import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight, Menu, Moon, Sun, X, Terminal, Layers, ShieldCheck, ClipboardList, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolio } from './portfolio-context';
import type { projects } from '@/data/projects';

export function Header() {
  const { language: l, setLanguage, light, toggleTheme } = usePortfolio();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const nav = [['sobre', 'Sobre', 'About'], ['projectos', 'Projectos', 'Projects'], ['competencias', 'Competências', 'Skills'], ['percurso', 'Percurso', 'Journey']];
  return <header className="site-header"><div className="container header-inner">
    <Link to="/" className="wordmark" aria-label="Kevin John"><span className="text-primary">k</span>j<span className="text-primary">.</span></Link>
    <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label={l === 'pt' ? 'Navegação principal' : 'Main navigation'}>{nav.map(([id, pt, en]) => <a key={id} href={`${location.pathname === '/' ? '' : '/'}#${id}`} onClick={() => setOpen(false)}>{l === 'pt' ? pt : en}</a>)}</nav>
    <div className="header-actions"><div className="language-toggle"><Button size="sm" variant="ghost" className={l === 'pt' ? 'selected-language' : ''} onClick={() => setLanguage('pt')} aria-pressed={l === 'pt'}>PT</Button><span>/</span><Button size="sm" variant="ghost" className={l === 'en' ? 'selected-language' : ''} onClick={() => setLanguage('en')} aria-pressed={l === 'en'}>EN</Button></div>
    <span className="header-divider"/><Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={l === 'pt' ? (light ? 'Activar tema escuro' : 'Activar tema claro') : (light ? 'Use dark theme' : 'Use light theme')} title={l === 'pt' ? 'Alternar tema' : 'Toggle theme'}>{light ? <Moon/> : <Sun/>}</Button>
    <Button variant="outline" asChild className="header-contact"><a href={`${location.pathname === '/' ? '' : '/'}#contacto`}>{l === 'pt' ? 'Vamos conversar' : "Let's talk"}<ArrowUpRight/></a></Button>
    <Button variant="ghost" size="icon" className="mobile-menu" aria-label={l === 'pt' ? 'Abrir menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>
  </div></header>;
}
export function SectionHeading({ number, eyebrow, title, children }: { number: string; eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><div className="eyebrow"><span>{number}</span><span className="eyebrow-line"/>{eyebrow}</div><h2>{title}</h2></div>{children}</div>;
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); return () => observer.disconnect(); }, []);
  return <div className={`reveal ${className}`}>{children}</div>;
}
export function ProjectVisual({ kind }: { kind: string }) {
  const { language: l } = usePortfolio();
  const Icon = kind === 'stock' ? Layers : kind === 'forms' ? ClipboardList : kind === 'queue' ? Activity : kind === 'security' ? ShieldCheck : Terminal;
  return <div className={`project-visual visual-${kind}`} aria-label={l === 'pt' ? 'Imagem provisória do projecto' : 'Project placeholder image'}><div className="visual-grid"/>{kind === 'stock' ? <div className="mini-window"><div className="mini-top"><i/><i/><i/><span>ALKINI</span></div><div className="mini-body"><div className="mini-side"><span/><span/><span/><span/></div><div className="mini-content"><div className="mini-stat-row"><span/><span/><span/></div><div className="mini-chart">{[30,50,38,65,48,75,60,90].map((h,i) => <i key={i} className={`bar-${h}`}/>)}</div><div className="mini-lines"><i/><i/><i/></div></div></div></div> : kind === 'forms' ? <div className="form-visual"><div className="form-icon"><Icon size={23}/></div><span className="form-line wide"/><span className="form-line"/><div className="form-options"><i/><span/></div><div className="form-options"><i/><span/></div><div className="form-next"><ArrowUpRight size={14}/></div></div> : kind === 'queue' ? <div className="queue-visual"><Activity size={23}/><span className="queue-number">024</span><div className="queue-bottom"><span>025</span><span>026</span><span>027</span></div></div> : <div className="icon-visual"><Icon size={52} strokeWidth={1}/><div className="visual-nodes"><i/><i/><i/></div></div>}<span className="visual-caption">{kind === 'stock' ? 'stock.management' : kind === 'forms' ? 'health.data' : kind === 'queue' ? 'patient.flow' : kind === 'security' ? 'internet.security' : 'systems.lab'}</span></div>;
}
export function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const { language: l } = usePortfolio();
  return <article className="project-card"><Link to="/projectos/$slug" params={{ slug: project.slug }} className="project-image-link" aria-label={project.title[l]}><ProjectVisual kind={project.visual}/></Link><div className="project-content"><div className="project-category"><span>{project.category[l]}</span><span>0{index + 1}</span></div><h3><Link to="/projectos/$slug" params={{ slug: project.slug }}>{project.title[l]}</Link></h3><p>{project.description[l]}</p><div className="project-tags">{project.technologies.length ? project.technologies.map(t => <span key={t}>{t}</span>) : <span>{l === 'pt' ? 'Projecto académico' : 'Academic project'}</span>}</div><Button asChild variant="link" className="project-detail-link"><Link to="/projectos/$slug" params={{ slug: project.slug }}>{l === 'pt' ? 'Explorar projecto' : 'Explore project'}<ArrowUpRight/></Link></Button></div></article>;
}
export function Footer() { const { language: l } = usePortfolio(); return <footer className="container footer"><span>© 2026 Kevin John<span className="footer-dot">.</span></span><span>{l === 'pt' ? 'Feito com propósito, em Moçambique.' : 'Made with purpose, in Mozambique.'}</span><a href="#top">{l === 'pt' ? 'Voltar ao topo' : 'Back to top'} ↑</a></footer>; }