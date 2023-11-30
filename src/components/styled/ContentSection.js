import React from 'react'
import styled from 'styled-components';

const Title = styled.h3`
  border-left: 3px solid #8a3324;
  padding-left: 15px;
  margin: 18px 0 0 0;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
`;

const SubTitle = styled.em`
  font-size: 22px;
  padding: 0;
  font-weight: 400;
  line-height: 1.5;
`;

const Section = styled.div`
  margin: 18px 0;

  p {
    font-size: 16px;
  }
`;

function ContentSection({ title, subtitle, children }) {
  if (!title || !subtitle) {
    return <Section>{children}</Section>;
  }

  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Section>{children}</Section>
    </>
  );
}

export default ContentSection;
