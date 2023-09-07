import { Suspense } from 'react';
import './App.css';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/Theme.ts';

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
