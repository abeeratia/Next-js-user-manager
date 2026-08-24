import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepperState {
  currentStep: number;
}

const initialState: StepperState = {
  currentStep: 1,
};

export const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    resetStep: (state) => {
      state.currentStep = 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { nextStep, prevStep, resetStep, setStep } = stepperSlice.actions;
export default stepperSlice.reducer;
