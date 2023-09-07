import { AxiosResponse } from 'axios';

export const useRequestHandling = () => {
  const resolve = <T>(resp: AxiosResponse<T>): T => {
    if (resp.status !== 200 && resp.status !== 201) {
      if (resp instanceof Error) {
        reject(resp);
        throw resp;
      }
      throw new Error('Error');
    }
    return resp.data;
  };

  const reject = (err: Error) => {
    const error = err.message;
    if (Array.isArray(error)) {
      console.log('Error', error);
    }
  };

  return { resolve };
};
