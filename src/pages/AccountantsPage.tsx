import { AccountantService, AccountantType } from '../services/AccountantService.ts';
import { useCallback, useEffect, useState } from 'react';
import AccountantCard from '../components/Accountants/AccountantCard.tsx';
import Grid from '../ui/Grid';
import { styled } from 'styled-components';
import LoadingOverlay from '../components/LoadingOverlay/LoadingOverlay.tsx';

export const SeeMoreBtn = styled('button')`
  border-radius: 8px;
  opacity: 1;
  background-color: rgba(227, 242, 253, 1);
  color: rgba(30, 136, 229, 1);
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
  text-align: left;
  line-height: 20px;
  margin-top: 24px;
`;

const AccountantsPage = () => {
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

  return (
    <>
      <Grid>
        {isLoading && accountants.length === 0 ? (
          <LoadingOverlay />
        ) : (
          <>
            {accountants.map((el) => (
              <AccountantCard key={el.login.uuid} accountant={el} />
            ))}
            {isLoading && <LoadingOverlay />}
          </>
        )}
      </Grid>
      <SeeMoreBtn onClick={showMore}>Pokaż więcej</SeeMoreBtn>
    </>
  );
};

export default AccountantsPage;
