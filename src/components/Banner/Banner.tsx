"use client"
import React from 'react'
import { Container, Overlay, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const Banner = () => {
    return (
        <div className={`${classes.hero}`}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <div className='text-white'>
                <Container className={classes.container} size="md">
                    <div className='mt-32'>
                        <h1 className={`${classes.title} ${ebGaramond.className} font-semibold text-[40px] md:text-[60px] lg:text-[80px]`}>Plan Your Next Meal Event With Us</h1>
                        <Text className={`${classes.description}`} size="xl" mt="xl">
                            The simplicity of homemade goodness with our Tiffin deliveries, where every meal is prepared with care & authenticity
                        </Text>

                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Banner
