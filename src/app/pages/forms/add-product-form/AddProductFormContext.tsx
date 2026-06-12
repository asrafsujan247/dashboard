import { create } from "zustand";
import { GeneralType, DescriptionType, ImageType } from "./schema";
import { Delta } from "@/components/shared/form/TextEditor";

export interface StepStatus {
  isDone: boolean;
}

export interface FormState {
  formData: {
    general: GeneralType;
    description: DescriptionType;
    images: ImageType;
  };
  stepStatus: {
    general: StepStatus;
    description: StepStatus;
    images: StepStatus;
  };
}

export type FormAction =
  | { type: "SET_FORM_DATA"; payload: Partial<FormState["formData"]> }
  | { type: "SET_STEP_STATUS"; payload: Partial<FormState["stepStatus"]> };

interface AddProductFormStore {
  state: FormState;
  dispatch: (action: FormAction) => void;
  reset: () => void;
}

const initialState: FormState = {
  formData: {
    general: {
      title: "",
      sku: "",
      price: 0,
      category_id: "",
      brand_id: "",
      inStock: true,
      selling_type: "",
    },
    description: {
      short_description: "",
      description: new Delta(),
      meta_title: "",
      meta_description: "",
      meta_keywords: [],
    },
    images: {
      gallery: [],
      cover: "",
    },
  },
  stepStatus: {
    general: { isDone: false },
    description: { isDone: false },
    images: { isDone: false },
  },
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "SET_STEP_STATUS":
      return { ...state, stepStatus: { ...state.stepStatus, ...action.payload } };
    default:
      return state;
  }
}

export const useAddProductFormStore = create<AddProductFormStore>((set) => ({
  state: initialState,
  dispatch: (action) => set((store) => ({ state: reducer(store.state, action) })),
  reset: () => set({ state: initialState }),
}));
