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
  return <>
    <ContentSection title="About" subtitle="Introduction">
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
    <ContentSection title="Personal" subtitle="Passion Projects">
        <p>There are so many things that interest me. If I am not recording music for my next album, then I may be found working on a beautiful landscape oil painting, putting together old model sets of WWII soldiers and equipment, or playing one of my favorite video games (Sea of Thieves or War Thunder).  With each of these passions I have a desire to turn it into something worth pursuing on a serious basis. For now though, these are my relaxation techniques from composing software on a regular basis.</p>
        <p>Recently I’ve discovered a passion for writing journal entries or short stories related to experiences I’ve had while playing my favorite video games. Soon, I plan on publishing a website dedicated to cataloging my stories in a fun and interactive manner.</p>
    </ContentSection>
    <ContentSection title="Software Career" subtitle="Work History">
        <p>Currently working at an addiction recovery center helping out with simple IT tasks. Looking to grow my skills and land somewhere that provides a healthy work life balance and allows me to develop solutions to technical problems on a consistent basis. I am currently growing my skills in three major areas. First being “Tutorials” such as The Odin Project and specific technologies like Django and Next.js. Second being “Exercises” such as HackerRank, Advent of Code, and LeetCode. Finally “Projects” where I take the tutorials and produce a functioning application. Some projects also include ideas I’ve had.</p>
        <p>The last job I held in software began in January 2016 ending June 2020. This was a full stack developer roll at a start-up company in Dallas/Austin Texas. What an incredible experience. My goal at this point is to get back to that level of writing code every day for a company. There is no better learning environment. This is my primary reference for what I am looking to do day to day. Being a full stack developer I handled all areas of the stack. Managing a frontend codebase with users that were in-house so I got to see how they used the product, take notes and make changes before they realized changes were even necessary. Rewriting an API to use Jest for testing coverage, I learned much about API design best practices and interacting with a relational database as well as elastic search. Monitoring AWS services like CloudWatch, ECS, and working with the RDS SDK to compose scripts that allowed the production database to be backed-up at the click of a button through the frontend. This introduced me to the incredible world of Software Engineering.</p>
        <p>A mentor of mine allowed me to work for him during the summer and following year after I completed High School. Without his help and guidance I would likely have never stumbled upon the world of software engineering. From January 2014 through January 2016 I worked with him in a co-working space in downtown Dallas Texas. Here I got my first taste of writing SQL, NodeJs was coming out at that time and had become very popular, and Angular/React became a hot topic for discussion as React was new having loads of potential while Angular 2 was close to being released. During this time, I got to do very similar to what I am currently doing. Very excited for what’s to come next, as the last time I was in this cycle I landed a very exciting job.</p>
    </ContentSection>
  </>
};

export default Software;
