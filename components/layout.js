import React from 'react';
import Head from 'next/head';
import Header from './header';
import { Container } from 'semantic-ui-react';

export default props => {
    return ( <
        Container >
        <
        Head >
        <
        link rel = "stylesheet"
        href = "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css" > < /link> <
        /Head> <
        Header > < /Header> { props.children } <
        /Container>
    );
}