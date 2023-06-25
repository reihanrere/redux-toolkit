import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import queryString from "query-string";

export const getUserList = createAsyncThunk(
  "user/getUserList",
  async (params, { rejectWithValue }) => {
    try {
      const param = queryString.stringify(params);
      const { data } = await axios.get(`https://reqres.in/api/users?${param}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
