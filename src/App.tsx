import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from 'config/router.tsx';
import { theme } from 'config/Theme.ts';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingOverlay />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
