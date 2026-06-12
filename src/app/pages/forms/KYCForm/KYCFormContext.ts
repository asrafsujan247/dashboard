import { create } from "zustand";
import {
  AddressInfoType,
  DeclarationType,
  IdentifyDocumentType,
  PersonalInfoType,
} from "./schema";

export interface StepStatus {
  isDone: boolean;
}

export type StepKey =
  | "personalInfo"
  | "addressInfo"
  | "identifyDocument"
  | "declaration";

export interface FormState {
  readonly formData: {
    personalInfo: PersonalInfoType;
    addressInfo: AddressInfoType;
    identifyDocument: IdentifyDocumentType;
    declaration: DeclarationType;
  };
  readonly stepStatus: {
    [key in StepKey]: StepStatus;
  };
}

export type FormAction =
  | { type: "SET_FORM_DATA"; payload: Partial<FormState["formData"]> }
  | { type: "SET_STEP_STATUS"; payload: Partial<FormState["stepStatus"]> };

interface KYCFormStore {
  state: FormState;
  dispatch: (action: FormAction) => void;
  reset: () => void;
}

const initialState: FormState = {
  formData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      dialCode: "",
      phone: "",
      gender: "",
      dateOfBirth: null,
      matrialStatus: "",
      nationality: "",
    },
    addressInfo: {
      permanentAddress: {
        country: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
      },
      isSameCorrespondenceAddress: true,
      correspondenceAddress: {
        country: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
      },
    },
    identifyDocument: {
      type: "passport",
      imageFront: null,
      imageBack: null,
      passportPage: null,
    },
    declaration: {
      agreed: false,
      fullName: "",
      dateSigned: null,
    },
  },
  stepStatus: {
    personalInfo: { isDone: false },
    addressInfo: { isDone: false },
    identifyDocument: { isDone: false },
    declaration: { isDone: false },
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

export const useKYCFormStore = create<KYCFormStore>((set) => ({
  state: initialState,
  dispatch: (action) => set((store) => ({ state: reducer(store.state, action) })),
  reset: () => set({ state: initialState }),
}));
