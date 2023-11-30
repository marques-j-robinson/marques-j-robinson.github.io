import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
`;

export default function ({href, children}) {
    return <Link href={href}>
        {children}
    </Link>
}
