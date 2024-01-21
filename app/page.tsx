'use client'

import React from 'react'
import styled from 'styled-components';

import Container from './styled/Container.js'

import Header from './Header.js'
import Footer from './Footer.js'

import Software from './Software.js'

const SiteWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Main = styled.main`
    flex: 1;
`;

export default function Page() {
  return <SiteWrapper>
    <Main>
        <Container>
            <Header />
            <Software />
        </Container>
    </Main>
    <Footer />
  </SiteWrapper>;
}
