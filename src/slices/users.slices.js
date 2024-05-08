import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const usersSlices = createSlice({
  name: 'users',
  initialState: 'Done, it´s a ready',
  reducers: {
    setUsersG: (state, action) => action.payload,
  },
});

export const { setUsersG } = usersSlices.actions;

export default usersSlices.reducer;

export const getAllUsersThunk = () => (dispatch) => {
  const url = 'https://randomuser.me/api/';
  axios
    .get(url)
    .then(res => dispatch(setUsersG(res.data.results[0])))
    .catch(err => console.log(err));
};
