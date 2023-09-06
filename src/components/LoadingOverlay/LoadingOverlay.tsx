import { Backdrop, CircularProgress } from '@mui/material';

type LoadingOverlayProps = {
  isLoading: boolean;
};

export const LoadingOverlay = ({ isLoading }: LoadingOverlayProps) => {
  return (
    <Backdrop open={isLoading} sx={{ color: '#AAA' }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
