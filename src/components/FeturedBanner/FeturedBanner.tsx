"use client"
import { Card, Overlay } from '@mantine/core';
import classes from './ImageActionBanner.module.css';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
    weight: ['400', '700'], // Choose the desired font weights
    subsets: ['latin'], // Optional: Specify the character subsets
});

export function FeturedBanner() {
    return (
        <div className='mt-16'>
            <Card radius="md" className={classes.card}>
                <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                    opacity={1}
                    zIndex={0} />

                <div className={classes.content}>
                    <div className='pl-16 mt-16 container mx-auto'>
                        <h2 className={`text-[40px] md:text-[60px] lg:text-[80px] text-white font-semibold leading-[45px] md:leading-[90px] lg:leading-[100px] ${ebGaramond.className}`}>Ensuring a Delightful <br /> Memorable Kitchen Experience</h2>
                        <p className='text-xl text-white mt-6'>Enjoy a delightful, memorable kitchen experience with homemade meals crafted with care and authenticity.</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}