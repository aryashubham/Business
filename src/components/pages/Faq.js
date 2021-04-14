import React, { Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Client from '../layouts/Client'
import Content from '../sections/faq/Content'


export default () => {

    return (
        <Fragment>
            <MetaTags>
                <title>FAQ's</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumbs breadcrumb={{ pagename: "FAQ's" }} />
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