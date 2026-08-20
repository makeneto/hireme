import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type {
  ApplicationAreaCode,
  LanguageCode,
} from "@/interfaces/select-types"
import { AttachmentKey, AttachmentsState } from "@/interfaces/checkbox-types"

const initialState = {
  companyName: "",
  jobTitle: "",
  companyEmail: "",
  language: "pt" as LanguageCode,
  applicationArea: "engineering" as ApplicationAreaCode,
  attachments: { cv: true, coverLetter: true, bi: false } as AttachmentsState,
  sent: false,
  previewOpen: false,
}

const emailComposerSlice = createSlice({
  name: "emailComposer",
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{
        field: "companyName" | "jobTitle" | "companyEmail"
        value: string
      }>,
    ) => {
      state[action.payload.field] = action.payload.value
      state.sent = false
    },
    setLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.language = action.payload
    },
    setApplicationArea: (state, action: PayloadAction<ApplicationAreaCode>) => {
      state.applicationArea = action.payload
    },
    toggleAttachment: (state, action: PayloadAction<AttachmentKey>) => {
      state.attachments[action.payload] = !state.attachments[action.payload]
    },
    setSent: (state, action: PayloadAction<boolean>) => {
      state.sent = action.payload
    },
    setPreviewOpen: (state, action: PayloadAction<boolean>) => {
      state.previewOpen = action.payload
    },
    resetForm: () => initialState,
  },
})

export const {
  setField,
  setLanguage,
  setApplicationArea,
  toggleAttachment,
  setSent,
  setPreviewOpen,
  resetForm,
} = emailComposerSlice.actions
export default emailComposerSlice.reducer
export type EmailComposerState = typeof initialState
