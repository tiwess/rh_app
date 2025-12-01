import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import i18n from './i18n';
import { theme } from '~shared/ui/theme';

const GlobalStyles = createGlobalStyle`
	${({ theme }) => theme.global.styles};
`;

export const App: FC = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div style={{ padding: 40 }}>Hi!</div>
                            </>
                        }
                    />
                </Routes>
            </ThemeProvider>
        </I18nextProvider>
    );
};
