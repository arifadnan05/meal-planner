import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import { FeturedBanner } from '../FeturedBanner/FeturedBanner'

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Card />
            <FeturedBanner />
        </div>
    )
}

export default Homepage
