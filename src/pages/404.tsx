import React from 'react';
import Layout from '../components/layout';
import { Text, Box } from '@chakra-ui/core';

const NotFoundPage: React.FC = () => (
    <Layout>
        <Box my={24}>
            <Text fontSize="5xl" color="purple.700" textTransform="uppercase" textAlign="center">
                Page not found
            </Text>
        </Box>
    </Layout>
);

export default NotFoundPage;
