import type { ApplicationAreaCode, LanguageCode } from "@/types"

export interface ProfileCopy {
  skills: string
  profile: string
}

export const PROFILE_COPY: Record<
  ApplicationAreaCode,
  Record<LanguageCode, ProfileCopy>
> = {
  engineering: {
    pt: {
      skills:
        "Sou Desenvolvedor de Software com experiência prática no desenvolvimento de aplicações web, trabalhando com tecnologias como JavaScript/TypeScript, React, Next.js, Prisma, PostgreSQL, integração de APIs e uso diário de Git/Github, entregando aplicações web desde o levantamento de requisitos até à manutenção em produção.",
      profile:
        "O meu perfil é proativo e orientado a resultados, e tenho interesse genuíno em crescer numa equipa que valorize a entrega de qualidade.",
    },
    en: {
      skills:
        "I am a Software Engineer with hands-on experience building web applications, working with technologies such as JavaScript/TypeScript, React, Next.js, Prisma, PostgreSQL, API integration, and daily use of Git/Github, delivering web applications from requirements gathering through production maintenance.",
      profile:
        "My profile is proactive and results-oriented, and I have a genuine interest in growing in a team that values ​​quality delivery.",
    },
    fr: {
      skills:
        "Je suis développeur de logiciels avec une expérience pratique dans le développement d'applications web, travaillant avec des technologies telles que JavaScript/TypeScript, React, Next.js, Prisma, PostgreSQL, l'intégration d'API et l'utilisation quotidienne de Git/Github, livrant des applications web depuis le recueil des besoins jusqu'à la maintenance en production.",
      profile:
        "Mon profil est proactif et axé sur les résultats, et j'ai un réel intérêt à évoluer au sein d'une équipe qui valorise une livraison de qualité.",
    },
  },
  ti: {
    pt: {
      skills:
        "Sou Profissional de Tecnologias de Informação com experiência em suporte técnico, manutenção de hardware e software, administração de redes e sistemas operativos, resolução de problemas e apoio direto ao utilizador, garantindo o bom funcionamento dos equipamentos e sistemas do dia a dia.",
      profile:
        "Tenho um perfil resolutivo e organizado, com facilidade em comunicar com utilizadores de diferentes níveis técnicos, e interesse em integrar uma equipa que valorize o cuidado com a infraestrutura e o suporte de qualidade.",
    },
    en: {
      skills:
        "I am an IT Professional with experience in technical support, hardware and software maintenance, network and operating system administration, troubleshooting, and direct end-user support, ensuring the smooth day-to-day operation of equipment and systems.",
      profile:
        "I have a resourceful, organized approach, with strong communication skills across users of different technical levels, and a genuine interest in joining a team that values reliable infrastructure and quality support.",
    },
    fr: {
      skills:
        "Je suis professionnel des technologies de l'information avec une expérience en support technique, maintenance du matériel et des logiciels, administration de réseaux et de systèmes d'exploitation, résolution de problèmes et assistance directe aux utilisateurs, garantissant le bon fonctionnement quotidien des équipements et systèmes.",
      profile:
        "J'ai un profil débrouillard et organisé, avec une grande facilité de communication auprès d'utilisateurs de différents niveaux techniques, et un intérêt sincère à intégrer une équipe qui valorise une infrastructure fiable et un support de qualité.",
    },
  },
}
