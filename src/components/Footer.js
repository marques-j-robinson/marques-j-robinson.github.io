import React from 'react'
import styled from 'styled-components';
import Icon from './styled/Icon.js'

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
        <Social>
            <li><Icon type="GitHub" /></li>
            <li><Icon type="Medium" /></li>
            <li><Icon type="LinkedIn" /></li>
        </Social>
        marques.j.robinson@gmail.com
      </Wrapper>
  );
}

export default Footer;
