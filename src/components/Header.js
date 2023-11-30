import React from 'react';
import styled from 'styled-components';

import {Container} from './styled/Container.js'
import Link from './styled/Link.js'

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  background-color: #555555;
  border-top: 3px solid #bd2c0f;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column !important;
  }
`;

const Name = styled.h1`
  margin-top: auto;
  margin-bottom: 0;
  padding: 12px 0;
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 20px 0 0 0;
  }
`;

const Last = styled.span`
  color: #e3a857;
`;

const Skills = styled.em`
  color: #ffffff;
  margin-top: auto;
  padding: 0 0 12px 16px;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 0 20px 0;
  }
`;

function Header() {
  return <Link href="/">
    <Wrapper>
        <Name>Marques <Last>Robinson</Last></Name>
        <Skills>software engineer / musician / painter</Skills>
    </Wrapper>
  </Link>;
}

export default Header;
