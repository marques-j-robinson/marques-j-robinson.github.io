import React from 'react';
import styled from 'styled-components';

import ContentSection from '../components/styled/ContentSection.js'
import srcProfilePic from 'images/profile.jpeg'

const ProfilePic = styled.img`
    border-radius: 50%;
    width: 250px;
    height: 250px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    p { margin-top: 0; }

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column !important;

      p { margin-top: 18px; }
    }
`;

const Bio = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Hobbies = styled.div`
    h3, ul {
        margin: 0;
    }
    ul {
        padding-left: 15px;
    }
`

const Software = () => {
  return <ContentSection title="About" subtitle="Introduction">
    <Wrapper>
      <ProfilePic src={srcProfilePic} alt="Profile Picture" />
      <Bio>
        <p>I am a web developer, self-taught. Always learning something new. Comfortable collaborating both within and outside of an engineering team. Currently diving into Python/Django to develop solutions for the back-end and power my personal sites.</p>
        <Hobbies>
            <h3>Hobbies</h3>
            <ul>
                <li>Aspiring oil painting artist</li>
                <li>Multi-instrumental musician</li>
                <li>Aspiring pilot</li>
                <li>Philosophy</li>
                <li>Chess and chess like games</li>
                <li>Hiking and spending time in nature</li>
            </ul>
        </Hobbies>
      </Bio>
    </Wrapper>
  </ContentSection>;
};

export default Software;
