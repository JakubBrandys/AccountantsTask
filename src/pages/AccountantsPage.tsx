import { AccountantService, AccountantType } from '../services/AccountantService.ts';
import { useEffect, useState } from 'react';
import AccountantCard from '../components/Accountants/AccountantCard.tsx';
import Flex  from '../ui/Flex';

const AccountantsPage = () => {
  const { getAccountants } = AccountantService();
  const [accountants, setAccountants] = useState<AccountantType[]>([]);
  const fetchAccountants = async () => {
    const resp = await getAccountants();
    setAccountants(resp.results);
    return;
  };

  useEffect(() => {
    fetchAccountants();
  }, []);

  return (
    <Flex>
      {accountants.map((el) => (
        <AccountantCard key={el.id.value} accountant={el} />
      ))}
    </Flex>
  );
};

export default AccountantsPage;
