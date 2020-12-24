import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
    Layout,
    IntroSection,
    ShowCaseSection,
    ContactSection
} from '../component';

const IndexPage = () => (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Justice Otuya | Portfolio</title>
        </Helmet>
        <IntroSection />
        <ShowCaseSection />
        <ContactSection />
    </Layout>
);

export default IndexPage;
