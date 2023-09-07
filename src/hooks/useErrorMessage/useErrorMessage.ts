import { useState } from 'react';
import { useRouteError } from 'react-router-dom';
import { IErrorMessage } from 'hooks/useErrorMessage/types.ts';

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
