import axios from 'axios';
import { Error, Response } from './types';

const getPrice = async (): Promise<Response | Error> => {
  try {
    const response = await axios.get<Response>(
      'https://www.boredapi.com/api/activity'
    );
    return response.data;
  } catch (error: any) {
    return { msg: error.response.data } as Error;
  }
};

export default getPrice;
