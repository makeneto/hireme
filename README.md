# Hireme

> Intelligent application email generator, created to transform job posting data into a professional message ready for review and sending.

## Overview

Hireme reduces repetitive application work. Provide the company, job title, destination email, language, and professional area; the application generates a contextualized preview with subject, body, and references to selected attachments.

## Features

- Typed form with instant validation via React Hook Form and Zod.

- Accessible error messages for required fields and invalid emails.

- Multilingual selectors that display the readable name, preserving internal codes.

- Responsive preview, with fullscreen mode on mobile devices.

- Preview button in navigation, activated only after complete validation.

- Centralized status management with Redux Toolkit, without excessive prop drilling.

- Selection of attachments mentioned in the email.

- Send action that opens Gmail with recipient, subject, and content pre-filled.

- Light/dark theme and responsive interface.

## Stack

- Next.js 16 and React 19
- TypeScript
- Redux Toolkit and React Redux
- React Hook Form, Zod, and resolvers
- Tailwind CSS and shadcn/ui components
- pnpm

## Requirements

- `Node.js 20` or higher
- `pnpm 11` or compatible

## Local Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the development server with HMR |
| `pnpm build` | Creates the production build |
| `pnpm start` | Starts the compiled application |
| `pnpm lint` | Runs lint checks |

## Main Structure

```text
src/
├── app/ # Global routes, layout, and styles
├── components/ # Interface and form components
├── data/ # Localized options and text
├── hooks/ # Derived state and composition rules
├── lib/ # Utilities and email content generation
├── store/ # Slices and Redux Toolkit configuration
└── types.ts # Shared application types

```

## Usage Flow

1. Fill in the three required fields.

2. Choose the language and area of ​​application.

3. Select the attachments to be mentioned.

4. Use **Show Preview** to review the message on mobile, the preview occupies the entire screen.

5. Confirm the content and use **Send in Gmail**.

Hireme does not automatically upload files: the browser prevents attachments via URL. Documents must be added manually to Gmail.

## Quality and Contribution

Before opening a pull request, run `pnpm lint` and `pnpm build`. Keep components accessible, preserve existing visual tokens, and avoid introducing local state when data is shared between areas of the application.

## License

This project is maintained by Makene Neto. Consult the repository owner for licensing and usage information.
