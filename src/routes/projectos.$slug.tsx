import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { usePortfolio } from '@/components/portfolio-context';
import { Header, Footer, ProjectVisual } from '@/components/portfolio-ui';
import { Button } from '@/components/ui/button';
export const Route = createFileRoute('/projectos/$slug')({
  loader: ({ params }) => { const project = projects.find(p => p.slug === params.slug); if (!project) throw notFound(); return project; },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.title.pt ?? 'Projecto não encontrado'} — Kevin John` },
    { name: 'description', content: loaderData?.description.pt ?? 'Projecto indisponível no portefólio de Kevin John.' },
    { property: 'og:title', content: `${loaderData?.title.pt ?? 'Projecto'} — Kevin John` },
    { property: 'og:description', content: loaderData?.description.pt ?? 'Portefólio profissional de Kevin John.' },
    { property: 'og:type', content: 'article' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: ProjectDetail,
});
function ProjectDetail() {
  const project = Route.useLoaderData(); const { language: l } = usePortfolio();
  return <div id="top"><Header/><main className="container detail-page"><Button asChild variant="ghost" className="back-link"><Link to="/" hash="projectos"><ArrowLeft/>{l==='pt' ? 'Todos os projectos' : 'All projects'}</Link></Button><div className="eyebrow">{project.category[l]}</div><h1>{project.title[l]}</h1><p className="detail-intro">{project.description[l]}</p><div className="project-tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div><div className="detail-layout"><div className="detail-visual"><ProjectVisual kind={project.visual}/><p>{l==='pt' ? 'Representação ilustrativa · Sem dados institucionais ou de participantes.' : 'Illustrative representation · No institutional or participant data.'}</p></div><div className="detail-copy">{[
    [l==='pt' ? 'O problema' : 'The problem',project.problem[l]], [l==='pt' ? 'A solução' : 'The solution',project.solution[l]], [l==='pt' ? 'Tecnologias' : 'Technologies',project.technologies.join(' · ') || (l==='pt' ? 'A confirmar com Kevin.' : 'To be confirmed with Kevin.')], [l==='pt' ? 'O meu papel' : 'My role',project.role[l]], [l==='pt' ? 'Resultado' : 'Outcome',project.result[l]],
  ].map(([title,body],i) => <section key={title}><span>0{i+1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}</div></div><Button asChild size="lg"><a href="/#contacto">{l==='pt' ? 'Vamos conversar' : 'Let’s talk'}<ArrowUpRight/></a></Button></main><Footer/></div>;
}
