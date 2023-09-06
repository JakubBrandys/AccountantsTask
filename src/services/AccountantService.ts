import axios from 'axios';

export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  id: {
    name: string;
    value: string
  },
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
  const seed = 'abc';
  const gender = 'female';
  const page = 1;
  const results = 5;

  const apiUrl = `https://randomuser.me/api/?seed=${seed}&gender=${gender}&page=${page}&results=${results}`;

  const getAccountants = async () => {
    const response = await axios.get(apiUrl);
    return response.data as AccountantResponseType;
  };
  return {
    getAccountants,
  };
};
