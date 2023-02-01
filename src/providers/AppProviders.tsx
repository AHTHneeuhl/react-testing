import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

type AppProvidersProps = {
  children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
