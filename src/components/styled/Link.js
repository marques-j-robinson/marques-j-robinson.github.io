import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
`;

export default function ({href, target, children}) {
    return <Link href={href} target={target}>
        {children}
    </Link>
}
