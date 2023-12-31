import React from 'react'
import styled from 'styled-components';
import srcGithubIcon from 'images/icons/github.svg'
import srcMediumIcon from 'images/icons/medium.svg'
import srcLinkedInIcon from 'images/icons/linkedin.svg'

const BaseIcon = styled.img`
    width: 25px;
    height: 25px;
`

const GitHubIcon = styled(BaseIcon)`
    filter: invert(3%) sepia(20%) saturate(140%) hue-rotate(314deg) brightness(94%) contrast(87%);
`

const MediumIcon = styled(BaseIcon)`
    filter: invert(0%) sepia(100%) saturate(7447%) hue-rotate(246deg) brightness(108%) contrast(112%);
`

const LinkedInIcon = styled(BaseIcon)`
    filter: invert(25%) sepia(99%) saturate(1557%) hue-rotate(195deg) brightness(95%) contrast(93%);
`

function Icon(props) {
    const {type} = props
    if (type === 'GitHub') {
        return (
            <a href="https://github.com/marques-j-robinson" target="_blank">
                <GitHubIcon src={srcGithubIcon} alt="Github Icon" />
            </a>
        )
    }
    if (type === 'Medium') {
        return (
            <a href="https://medium.com/@marques-robinson-project" target="_blank">
                <MediumIcon src={srcMediumIcon} alt="Medium Icon" />
            </a>
        )
    }
    if (type === 'LinkedIn') {
        return (
            <a href="https://www.linkedin.com/in/marques-j-robinson/" target="_blank">
                <LinkedInIcon src={srcLinkedInIcon} alt="LinkedIn Icon" />
            </a>
        )
    }
}

export default Icon;
