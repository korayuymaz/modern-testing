import { render } from "@testing-library/react";

function ThemeProvider({ children }) {
  return <div className="theme-provider">{children}</div>;
}

function i18nProvider({ children }) {
  return <div className="i18n-provider">{children}</div>;
}

function AllProviders({ children }) {
  return (
    <ThemeProvider>
      <i18nProvider>{children}</i18nProvider>
    </ThemeProvider>
  );
}

export const customRender = (ui, options) => {
  render(ui, {
    wrapper: AllProviders,
    ...options,
  });
};
