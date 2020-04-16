import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button, Text, Box, PseudoBox, Flex, theme } from '@chakra-ui/core';
import HomeImageOne from '../components/HomeImageOne';
import HomeImageTwo from '../components/HomeImageTwo';

const Section: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <Box
        display="grid"
        gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: '1fr 1fr' }}
        gridGap={{ base: 6, md: 12 }}
        py={{ base: 20, md: 24 }}
    >
        <Box
            width={{ base: 500, md: 'unset' }}
            maxWidth="100%"
            textAlign={{ base: 'center' }}
            mx={{ base: 'auto', md: 'unset' }}
        >
            <HomeImageOne />
        </Box>
        <Box display="flex" flexDirection="column" maxWidth={500} mx="auto" textAlign={{ base: 'center', md: 'left' }}>
            <Text mb={4} as="h3" fontSize={{ base: '3xl', md: '4xl' }} color="purple.700">
                {title}
            </Text>
            <Text fontSize="lg" lineHeight="1.6">
                {description}
            </Text>
        </Box>
    </Box>
);

const PricingOption: React.FC<{
    isPremium?: boolean;
    title: string;
    description: string;
    price: string;
    features: React.ReactNode[];
}> = ({ title, description, price, features, isPremium = false }) => {
    const color = isPremium ? theme.colors.purple[600] : theme.colors.purple[400];
    return (
        <Box
            textAlign="left"
            mx={{ base: 'auto', md: 'unset' }}
            border={`3px solid ${isPremium ? color : 'white'}`}
            p={8}
            borderRadius={8}
            backgroundColor="white"
            width={350}
            maxW="100%"
            boxShadow="rgba(0, 0, 0, 0.11) 0 0 20px 0px"
        >
            <Text as="h3" fontSize="4xl" color={color} fontWeight={500} mb={1}>
                {title}
            </Text>
            <Text>{description}</Text>
            <Text my={8}>
                <Box as="span" fontSize="5xl" color={color} fontWeight={500} mr={2}>
                    {price}
                </Box>
                per month
            </Text>
            <Flex as="ul" direction="column" listStyleType="none">
                {features.map((feature, index) => (
                    <Box as="li" lineHeight="2" key={index}>
                        {feature}
                    </Box>
                ))}
            </Flex>
            <Button mt={8} isFullWidth variantColor="purple" href="https://app.techjobhunt.com/signup" as="a">
                Get started
            </Button>
        </Box>
    );
};

const PricingButton: React.FC<{ title: string; isSelected: boolean; onClick: () => void }> = ({
    title,
    isSelected,
    onClick,
}) => (
    <PseudoBox
        as="button"
        py={2}
        px={4}
        color={isSelected ? 'white' : 'purple.800'}
        fontWeight={600}
        onClick={onClick}
        backgroundColor={isSelected ? 'purple.800' : 'unset'}
        borderRadius={5}
        borderWidth={3}
        borderColor={isSelected ? 'yellow.400' : 'transparent'}
    >
        {title}
    </PseudoBox>
);

enum PricingFrequency {
    MONTLHY = 'monthly',
    YEARLY = 'yearly',
}

const HomePage: React.FC<{}> = () => {
    const [selectedPricingFrequency, setSelectedPricingFrequency] = useState(PricingFrequency.MONTLHY);
    return (
        <Layout>
            <SEO />
            <Flex
                py={12}
                px={{ base: 4, md: 8, xl: 12 }}
                alignItems="center"
                maxWidth={1600}
                mx="auto"
                direction={{ base: 'column-reverse', xl: 'row' }}
            >
                <Box
                    width={{ base: 'auto', xl: '50%' }}
                    paddingRight={{ xl: 16 }}
                    textAlign={{ base: 'center', xl: 'left' }}
                >
                    <Text
                        as="h2"
                        fontSize={['3xl', '3xl', '4xl', '4xl', '5xl']}
                        lineHeight={{ xl: '1.2' }}
                        color="purple.700"
                        mb={2}
                    >
                        Track your job search
                    </Text>
                    <Text
                        fontSize={['md', 'lg', 'lg', 'lg', '2xl']}
                        color={'gray.600'}
                        mb={8}
                        maxW={{ base: 400, xl: 600 }}
                    >
                        Record job applications and view analytics related to your job hunt
                    </Text>
                    <Button size="lg" as="a" href="https://app.techjobhunt.com/signup" variantColor="purple">
                        Get started
                    </Button>
                </Box>
                <Box
                    width={{ base: '100%', xl: '50%' }}
                    display={{ base: 'grid', xl: 'column' }}
                    gridTemplateColumns={{ base: '1fr 1fr', xl: 'unset' }}
                    gridGap={6}
                    flexDirection={{ base: 'unset', xl: 'column' }}
                    overflow="hidden"
                    mb={{ base: 10, xl: 'unset' }}
                >
                    <Box transform={{ xl: 'translateY(8%) translateX(5%)' }} px={{ xl: '5%' }}>
                        <HomeImageOne />
                    </Box>
                    <Box transform={{ xl: 'translateY(-8%) translateX(-5%)' }} px={{ xl: '5%' }}>
                        <HomeImageTwo />
                    </Box>
                </Box>
            </Flex>
            <Box maxWidth={1100} mx="auto" px={{ base: 4, md: 8 }} py={10}>
                <Section
                    title={'Overview of all jobs'}
                    description={`See all the jobs you've applied to in one place. You're able to sort the job applications by the company
                    name, job status (interested, applied, interviewing, etc).`}
                />
                <Section
                    title={'Rich analytics'}
                    description={`Easily view the progress of your job hunt by looking at charts outlining statistics related to the jobs
                you've applied to.`}
                />
                <Section
                    title={'Upload resumes'}
                    description={`Upload resumes to the app and attach resumes to the jobs you've applied to. You're able to upload
                mutliple version of the resumes and have different resumes for different roles.`}
                />
                <Section
                    title={'Job-specific details'}
                    description={`Record all relevant details related to a job application, such as the role, company, location,
                application status, contacts, cover letter, etc.`}
                />
            </Box>
            <Box textAlign="center" py={12} maxWidth={1100} mx="auto">
                <Text mb={12} fontSize="4xl">
                    Pricing
                </Text>
                <Flex mb={10} justify="center">
                    <Flex>
                        <PricingButton
                            title="Monthly"
                            isSelected={selectedPricingFrequency === PricingFrequency.MONTLHY}
                            onClick={(): void => {
                                setSelectedPricingFrequency(PricingFrequency.MONTLHY);
                            }}
                        />
                        <PricingButton
                            title="Yearly"
                            isSelected={selectedPricingFrequency === PricingFrequency.YEARLY}
                            onClick={(): void => {
                                setSelectedPricingFrequency(PricingFrequency.YEARLY);
                            }}
                        />
                    </Flex>
                </Flex>
                <Box
                    display="grid"
                    flexWrap="wrap"
                    gridTemplateColumns={{ base: 'minmax(0, 1fr)', md: '1fr 1fr' }}
                    justifyContent="center"
                    mb={10}
                    px={4}
                    gridGap={12}
                    css={css`
                        & > div:first-of-type {
                            margin-left: auto;
                        }
                        ,
                        & > div:last-of-type {
                            margin-right: auto;
                        }
                    `}
                >
                    <PricingOption
                        title={'Free'}
                        description="For the casual job seeker applying to few jobs."
                        price="$0"
                        features={['All app features', 'Limit of 10 job applications']}
                    />
                    <PricingOption
                        title={'Premium'}
                        description={'For the active job seeker applying to many jobs.'}
                        price={selectedPricingFrequency === PricingFrequency.MONTLHY ? '$5' : '$4'}
                        isPremium
                        features={[
                            'All app features',
                            <React.Fragment key="feature">
                                <span>Unlimited</span> job applications
                            </React.Fragment>,
                        ]}
                    />
                </Box>
                <Text>All prices shown are in USD</Text>
            </Box>
        </Layout>
    );
};

export default HomePage;
