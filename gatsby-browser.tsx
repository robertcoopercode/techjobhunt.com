// gatsby-browser.js
import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider, theme, CSSReset, ColorModeProvider } from '@chakra-ui/core';

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <ColorModeProvider>
                <Global
                    styles={css`
                        body {
                            background-color: #f4f2fa;
                        }
                    `}
                />
                {element}
            </ColorModeProvider>
        </ThemeProvider>
    );
};
