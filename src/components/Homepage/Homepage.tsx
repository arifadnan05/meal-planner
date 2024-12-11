import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import { FeturedBanner } from '../FeturedBanner/FeturedBanner'
import { Faq } from '../Faq/Faq'

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Card />
            <FeturedBanner />
            <Faq />
        </div>
    )
}

export default Homepage
