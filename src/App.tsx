import { ThemeProvider } from '@emotion/react';
import { theme } from './config/styles/theme';
import { Pages } from './pages';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Pages />
    </ThemeProvider>
  );
};
