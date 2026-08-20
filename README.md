# Hireme

> Gerador inteligente de e-mails de candidatura, criado para transformar dados de uma vaga numa mensagem profissional pronta para revisão e envio.

## Visão geral

O Hireme reduz o trabalho repetitivo de candidaturas. Informe a empresa, a vaga, o e-mail de destino, o idioma e a área profissional; a aplicação gera uma pré-visualização contextualizada com assunto, corpo e referências aos anexos selecionados.

## Funcionalidades

- Formulário tipado com validação instantânea através de React Hook Form e Zod.
- Mensagens de erro acessíveis para campos obrigatórios e e-mails inválidos.
- Seletores multilíngues que exibem o nome legível, preservando códigos internos.
- Pré-visualização responsiva, com modo fullscreen em dispositivos móveis.
- Botão de prévia na navegação, ativado apenas após validação completa.
- Gestão centralizada do estado com Redux Toolkit, sem prop drilling excessivo.
- Seleção de anexos mencionados no e-mail.
- Ação de envio que abre o Gmail com destinatário, assunto e conteúdo preenchidos.
- Tema claro/escuro e interface responsiva.

## Stack

- Next.js 16 e React 19
- TypeScript
- Redux Toolkit e React Redux
- React Hook Form, Zod e resolvers
- Tailwind CSS e componentes shadcn/ui
- pnpm

## Requisitos

- Node.js 20 ou superior
- pnpm 11 ou compatível

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento com HMR |
| `pnpm build` | Cria a build de produção |
| `pnpm start` | Inicia a aplicação compilada |
| `pnpm lint` | Executa as verificações de lint |

## Estrutura principal

```text
src/
├── app/                    # Rotas, layout e estilos globais
├── components/             # Componentes de interface e formulário
├── data/                   # Opções e textos localizados
├── hooks/                  # Estado derivado e regras de composição
├── lib/                    # Utilitários e geração do conteúdo do e-mail
├── store/                  # Slices e configuração Redux Toolkit
└── types.ts                # Tipos partilhados da aplicação
```

## Fluxo de utilização

1. Preencha os três campos obrigatórios.
2. Escolha o idioma e a área da candidatura.
3. Selecione os anexos que serão mencionados.
4. Use **Mostrar Prévia** para revisar a mensagem — em mobile, a prévia ocupa a tela inteira.
5. Confirme o conteúdo e use **Enviar no Gmail**.

O Hireme não faz upload automático de ficheiros: o navegador impede anexos via URL. Os documentos devem ser adicionados manualmente no Gmail.

## Qualidade e contribuição

Antes de abrir um pull request, execute `pnpm lint` e `pnpm build`. Mantenha os componentes acessíveis, preserve os tokens visuais existentes e evite introduzir estado local quando o dado for partilhado entre áreas da aplicação.

## Licença

Este projeto é mantido por Makene Neto. Consulte o proprietário do repositório para informações sobre licenciamento e utilização.
