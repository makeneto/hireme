import { z } from "zod"

export const schema = z.object({
  companyName: z.string().trim().min(1, "Nome da empresa é obrigatório."),
  jobTitle: z.string().trim().min(1, "Título da vaga é obrigatório."),
  companyEmail: z.string().trim().email("Introduza um e-mail válido."),
})

export type CompanyFormValues = z.infer<typeof schema>
