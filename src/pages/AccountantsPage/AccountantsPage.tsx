import AccountantCard from 'components/Accountants/AccountantCard.tsx';
import LoadingOverlay from 'components/LoadingOverlay/LoadingOverlay.tsx';
import useAccountantsConfig from 'hooks/useAccountantsConfig/useAccountantsConfig.ts';
import Grid from 'ui/Grid';
import { SeeMoreBtn } from 'pages/AccountantsPage/AccountantsPageStyles.ts';

const AccountantsPage = () => {
  const { isLoading, accountants, showMore } = useAccountantsConfig();

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
