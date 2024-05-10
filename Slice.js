import { createSlice } from "@reduxjs/toolkit"


const initialState={
data:{}
}
export const RegSlice=createSlice({
  name:'Register',
  initialState,
  reducers:{
    addData:(state,action)=>{
      state.data=action.payload
    }
  }
})
export const {addData}=RegSlice.actions
export default RegSlice.reducer