import { AccountantService } from 'services/AccountantService.ts';
import { useCallback, useEffect, useState } from 'react';
import { AccountantType } from 'services/types.ts';

const useAccountantsConfig = () => {
  const { getAccountants } = AccountantService();
  const [accountants, setAccountants] = useState<AccountantType[]>([]);
  const [results, setResults] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAccountants = async () => {
    try {
      setIsLoading(true);
      const resp = await getAccountants(results);
      setAccountants(resp.results);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => await fetchAccountants())();
  }, [results]);

  const showMore = useCallback(() => {
    setResults((val) => val + 4);
  }, []);

  return {
    showMore,
    accountants,
    isLoading,
  };
};

export default useAccountantsConfig;
