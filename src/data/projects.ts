export type Language = 'pt' | 'en';
export type Localized = { pt: string; en: string };
export const text = (pt: string, en: string): Localized => ({ pt, en });
export const projects = [
  {
    slug: 'alkini', category: text('DESENVOLVIMENTO WEB', 'WEB DEVELOPMENT'), title: text('ALKINI', 'ALKINI'),
    description: text('Gestão de stock e utilizadores, da aplicação à administração do servidor.', 'Stock and user management, from the application to server administration.'),
    technologies: ['Laravel', 'PHP', 'Linux', 'SMTP'], visual: 'stock',
    problem: text('Centralizar a gestão de stock e o registo de utilizadores numa aplicação web.', 'Centralise stock management and user registration in a web application.'),
    solution: text('Sistema em Laravel com registo de utilizadores e envio de emails, administrado num servidor Linux através de SSH.', 'A Laravel system with user registration and email delivery, administered on a Linux server over SSH.'),
    role: text('Desenvolvimento da aplicação e administração do ambiente Linux.', 'Application development and Linux environment administration.'),
    result: text('Uma solução integrada de gestão de stock e utilizadores. Métricas de utilização não divulgadas.', 'An integrated stock and user management solution. Usage metrics are not disclosed.'),
  },
  {
    slug: 'formularios-saude', category: text('DADOS & INVESTIGAÇÃO', 'DATA & RESEARCH'), title: text('Dados que fazem a diferença', 'Data that makes a difference'),
    description: text('Formulários ODK/XLSForm para investigação em saúde e recolha de dados de qualidade.', 'ODK/XLSForm forms for health research and quality data collection.'),
    technologies: ['ODK', 'XLSForm', 'Enketo', 'Docker'], visual: 'forms',
    problem: text('Recolher dados consistentes em investigação em saúde materna, vigilância da meningite e avaliação do alerta precoce da malária.', 'Collect consistent data in maternal health research, meningitis surveillance and malaria early-warning assessment.'),
    solution: text('Formulários com variáveis geográficas e validações, apoiados por um ambiente local de validação em Docker e Enketo.', 'Forms with geographic variables and validation, supported by a local Docker and Enketo validation environment.'),
    role: text('Desenvolvimento, actualização, depuração e validação dos formulários electrónicos.', 'Development, updates, debugging and validation of electronic forms.'),
    result: text('Formulários adaptados aos questionários de investigação e validados antes da recolha. Não são apresentados dados de participantes.', 'Forms adapted to research questionnaires and validated before collection. No participant data is displayed.'),
  },
  {
    slug: 'gestao-filas', category: text('TECNOLOGIA PARA A SAÚDE', 'HEALTH TECHNOLOGY'), title: text('Menos espera. Mais cuidado.', 'Less waiting. More care.'),
    description: text('Proposta de sistema web de filas e registo de pacientes para unidades de saúde públicas.', 'A proposed patient queue and registration web system for public health facilities.'),
    technologies: [], visual: 'queue',
    problem: text('Organizar o fluxo de pacientes e o processo de registo em unidades de saúde públicas em Moçambique.', 'Organise patient flow and registration in public health facilities in Mozambique.'),
    solution: text('Proposta de uma solução web para gestão de filas e registo de pacientes, apresentada nas Jornadas Científicas.', 'A proposed web solution for patient queues and registration, presented at the Scientific Days.'),
    role: text('Concepção da proposta e apresentação académica.', 'Proposal design and academic presentation.'),
    result: text('Proposta apresentada nas Jornadas Científicas. Implementação e tecnologias a confirmar.', 'Proposal presented at the Scientific Days. Implementation and technologies to be confirmed.'),
  },
  {
    slug: 'laboratorios-infraestrutura', category: text('INFRAESTRUTURA', 'INFRASTRUCTURE'), title: text('Infraestrutura em prática', 'Infrastructure in practice'),
    description: text('Laboratórios de sistemas, directórios e ambientes virtualizados.', 'Systems, directory services and virtual environment labs.'),
    technologies: ['Windows Server 2022', 'Active Directory', 'Docker', 'VirtualBox'], visual: 'infra',
    problem: text('Explorar a administração de sistemas e serviços num ambiente de aprendizagem controlado.', 'Explore system and service administration in a controlled learning environment.'),
    solution: text('Laboratórios com Windows Server 2022, Active Directory, máquinas virtuais e contentores Docker.', 'Labs with Windows Server 2022, Active Directory, virtual machines and Docker containers.'),
    role: text('Configuração, experimentação e administração dos ambientes de laboratório.', 'Configuration, experimentation and administration of lab environments.'),
    result: text('Experiência prática em virtualização e administração de sistemas, sem expor configurações internas de instituições.', 'Hands-on experience in virtualisation and systems administration, without exposing internal institutional configurations.'),
  },
  {
    slug: 'seguranca-internet', category: text('CIBERSEGURANÇA', 'CYBERSECURITY'), title: text('Segurança na Internet', 'Internet security'),
    description: text('Apresentação sobre segurança na Internet nas Jornadas Científicas de 2025.', 'An Internet security presentation at the 2025 Scientific Days.'),
    technologies: [], visual: 'security',
    problem: text('Sensibilizar para os fundamentos de segurança no uso da Internet.', 'Raise awareness of the fundamentals of safe Internet use.'),
    solution: text('Apresentação académica sobre segurança na Internet no ISGEGM.', 'An academic presentation on Internet security at ISGEGM.'),
    role: text('Preparação e apresentação do tema.', 'Preparation and presentation of the topic.'),
    result: text('Participação como apresentador nas Jornadas Científicas de 2025.', 'Participation as a presenter at the 2025 Scientific Days.'),
  },
];