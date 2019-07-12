import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
size: 50%;
`;


export default function Photo(props) {
    return (
        <Image src={props.data.url} alt="image of the day"/>
    )
}