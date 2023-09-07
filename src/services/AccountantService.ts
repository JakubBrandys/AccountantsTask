import axios from 'axios';
import { useRequestHandling } from 'hooks/useRequestHandling/useRequestHandling.ts';
import { AccountantResponseType } from 'services/types.ts';

export const AccountantService = () => {
  const { resolve } = useRequestHandling();
  const SEED = 'abc';
  const GENDER = 'female';
  const PAGE = 1;
  const APIURL = `https://randomuser.me/api/?seed=${SEED}&gender=${GENDER}`;

  const getAccountants = async (results: number) => {
    const response = await axios.get<AccountantResponseType>(
      `${APIURL}&page=${PAGE}&results=${results}`,
    );
    return resolve(response);
  };
  return {
    getAccountants,
  };
};
