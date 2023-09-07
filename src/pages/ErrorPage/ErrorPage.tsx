import { useErrorMessage } from 'hooks/useErrorMessage/useErrorMessage.ts';

const ErrorPage = () => {
  const { error, errorMessage } = useErrorMessage();

  return (
    <>
      <p>{error.statusText ?? 'Error'}</p>
      <p>{errorMessage}</p>
    </>
  );
};

export default ErrorPage;
