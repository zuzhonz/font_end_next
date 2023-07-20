import { NextResponse } from "next/server";
import axios from "../../config/axios";

export const getGoogleAccount = async (data: any) => {
  return await axios.post("/google-account", data);
};

export const googleMe = async () => {
  try {
    return await axios.get(`users`);
  } catch (error) {
    return JSON.stringify({
        'error': 'call api failed'
    })
  }
};
