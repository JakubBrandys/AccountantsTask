import axios from 'axios';
import { useRequestHandling } from '../hooks/useRequestHandling.ts';

export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  id: {
    name: string;
    value: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};
export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

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
