import { useState } from 'react';
import { useRouteError } from 'react-router-dom';

export interface IErrorMessage {
  data: unknown;
  status: number;
  statusText: string;
}
export const useErrorMessage = () => {
  const error = useRouteError() as IErrorMessage;
  const [errorMessage, setErrorMessage] = useState('');

  if (error.status === 404) {
    setErrorMessage('No data');
  } else if (error.status === 500) {
    setErrorMessage('Server error');
  } else {
    setErrorMessage('Unexpected error occured');
  }

  return { errorMessage, error };
};
