import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headertwo'
import Client from '../layouts/Client'
import Footer from '../layouts/Footertwo'
import Content from '../sections/hometwo/Content'

export default () => {

    return (
        <Fragment>
            <MetaTags>
                <title>Homepage</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Content />
            <section className="client-section">
                <div className="container">
                    <div className="client-slider section-gap">
                        <Client />
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}