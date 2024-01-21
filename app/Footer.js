import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-shrink: 0;
    margin-bottom: 1rem;
`

const Social = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        display: inline-block;
        margin: 0 5px;
    }
`

function Footer() {
  return (
      <Wrapper>
        marques.j.robinson@gmail.com
      </Wrapper>
  );
}

export default Footer;
