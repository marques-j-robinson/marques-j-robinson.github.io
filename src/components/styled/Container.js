import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }
`;

export default function ({children}) {
    return <Container>
        {children}
    </Container>
}
