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
