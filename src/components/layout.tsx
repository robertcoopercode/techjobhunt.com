import React from 'react';

import { Text, ButtonGroup, Button, Box, Link, Flex } from '@chakra-ui/core';
import Logo from './Logo';

const FooterListItem: React.FC = ({ children }) => (
    <Box as="li" mx={2}>
        {children}
    </Box>
);

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <Flex
                as="header"
                py={[4, 4, 6, 6, 8]}
                px={[4, 4, 8, 8, 12]}
                align="center"
                mt={{ base: 6, sm: 'unset' }}
                direction={{ base: 'column', sm: 'row' }}
            >
                <a href="/">
                    <Logo />
                </a>
                <ButtonGroup ml={{ sm: 'auto' }} mt={{ base: 6, sm: 'unset' }}>
                    <Button
                        as="a"
                        href="https://app.techjobhunt.com/login"
                        variant="outline"
                        variantColor="purple"
                        onClick={() => {
                            window.amplitude.getInstance().logEvent('login click');
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        as="a"
                        href="https://app.techjobhunt.com/signup"
                        variant="solid"
                        variantColor="purple"
                        onClick={() => {
                            window.amplitude.getInstance().logEvent('signup click', { element: 'main navigation' });
                        }}
                    >
                        Signup
                    </Button>
                </ButtonGroup>
            </Flex>
            <Box as="main">{children}</Box>
            <Flex direction="column" alignItems="center" as="footer" paddingTop={20} paddingBottom={16}>
                <Flex as="ul" listStyleType="none" mb={5}>
                    <FooterListItem>
                        <Link
                            href="mailto:support@techjobhunt.com"
                            onClick={() => {
                                window.amplitude.getInstance().logEvent('support email link click');
                            }}
                        >
                            support
                        </Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link
                            href="https://www.iubenda.com/privacy-policy/62237890"
                            target="blank"
                            rel="noopener"
                            onClick={() => {
                                window.amplitude.getInstance().logEvent('privacy policy link click');
                            }}
                        >
                            privacy
                        </Link>
                    </FooterListItem>
                    <FooterListItem>
                        <Link
                            href="https://www.iubenda.com/terms-and-conditions/62237890"
                            target="blank"
                            rel="noopener"
                            onClick={() => {
                                window.amplitude.getInstance().logEvent('terms & conditions link click');
                            }}
                        >
                            terms & conditions
                        </Link>
                    </FooterListItem>
                </Flex>
                <Text>
                    Made in 🇨🇦 by{' '}
                    <Link
                        href="https://www.robertcooper.me/"
                        onClick={() => {
                            window.amplitude.getInstance().logEvent('robert cooper website link click');
                        }}
                    >
                        Robert Cooper
                    </Link>
                </Text>
            </Flex>
        </>
    );
};

export default Layout;
