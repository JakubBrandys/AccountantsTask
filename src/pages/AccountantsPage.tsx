import { AccountantService, AccountantType } from '../services/AccountantService.ts';
import { useEffect, useState } from 'react';
import AccountantCard from '../components/Accountants/AccountantCard.tsx';
import Grid from '../ui/Grid';
import { styled } from 'styled-components';

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
  margin-left: 84px;
  margin-top: 24px;
`;

const AccountantsPage = () => {
  const { getAccountants } = AccountantService();
  const [accountants, setAccountants] = useState<AccountantType[]>([]);
  const [results, setResults] = useState(4);
  const fetchAccountants = async () => {
    const resp = await getAccountants(results);
    setAccountants(resp.results);
    return;
  };

  useEffect(() => {
    fetchAccountants();
  }, [results]);

  const showMore = () => {
    setResults((val) => val + 4);
  };

  return (
    <>
      <Grid>
        {accountants.map((el) => (
          <AccountantCard key={el.id.value} accountant={el} />
        ))}
      </Grid>
      <SeeMoreBtn onClick={showMore}>Pokaż więcej</SeeMoreBtn>
    </>
  );
};

export default AccountantsPage;
