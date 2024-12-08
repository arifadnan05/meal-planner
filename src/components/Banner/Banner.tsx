"use client"
import React from 'react'
import { Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

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
                        <Title className={classes.title}>Plan Your Next Meal Event With Us</Title>
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
