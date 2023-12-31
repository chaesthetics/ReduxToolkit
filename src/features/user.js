import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {value: {name:"name", age: 0, email:"email@gmail.com"} },
    reducers: {
        login: (state, action)=>{
            state.value = action.payload;
        }
    },
})

export const { login } = userSlice.actions;
export default userSlice.reducer;