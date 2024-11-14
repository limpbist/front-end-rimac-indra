import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberDocument: "",
  telephone: "",
  user: "",
  plans: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },

    getPlans: (state, action) => {
      state.plans = action.payload;
    },

    getPaymentResponsible: (state, action) => {
      const { numberDocument, telephone } = action.payload;
      state.numberDocument = numberDocument;
      state.telephone = telephone;
    },
  },
});

export const { getUser, getPlans, getPaymentResponsible } = userSlice.actions;
export default userSlice.reducer;
