import React from 'react'
import styled from 'styled-components';

const Email = styled.footer`
    text-align: center;
    flex-shrink: 0;
    margin-bottom: 1rem;
`

function Footer() {
  return (
      <Email>
        marques.j.robinson@gmail.com
      </Email>
  );
}

export default Footer;
