import React from 'react'
import Helmet from 'react-helmet'

import { Main, Features, Demo, Footer } from '../../components'


function Landing() {

    
    return (
        <div className="landing">
            <Helmet>
                <title>Rezueasy - Resume Maker</title>
            </Helmet>
            <Main />
            <Features />
            <Demo />
            <Footer />
        </div>
    )
}

export default Landing
