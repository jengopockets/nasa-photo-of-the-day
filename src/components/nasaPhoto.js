import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
height: 50%;
width: 50%;
padding-top: 5rem;
border: 2px solid black;
`;


export default function Photo(props) {
    return (
        <Image src={props.data.url} alt="image of the day"/>
    )
}