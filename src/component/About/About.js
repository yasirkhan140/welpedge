import React, { Fragment } from 'react'
import Heading from './Heading'
import Astep from '../Home/Astep'
import Navrathri from '../Home/Navrathri'

const About = () => {
    return (
        <Fragment>
            <Heading />
            <Astep page="about" />
            <Navrathri />
        </Fragment>
    )
}

export default About