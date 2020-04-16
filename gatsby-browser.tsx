/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// gatsby-browser.js
import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Global
                styles={css`
                    body {
                        background-color: #f4f2fa;
                    }
                `}
            />
            {element}
        </ThemeProvider>
    );
};
