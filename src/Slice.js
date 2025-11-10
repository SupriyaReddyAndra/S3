import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  photo: null,
};

 export let registerUserThunk=createAsyncThunk("registerUser",async(payload)=>{
  // console.log(payload);
  
    let {data}=await axios.post("https://192.168.0.197.5000/api/users/register",payload)
    console.log(data);
    
    return data
    
    })  

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { fullName, email, password, confirmPassword, photo } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
      state.confirmPassword = confirmPassword;
      state.photo = photo;
    },
  },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;

