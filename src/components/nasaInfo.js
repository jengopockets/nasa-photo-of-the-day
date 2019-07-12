import React from 'react';
import styled from 'styled-components';
const Date = styled.h2`
color: gray;
`;
const SpaceInfo = styled.p`
margin-right: 10%;
margin-left: 10%;
color: gray;
background-color: black;
border-radius: 12px;
`;

export default function Info(props) {
    return (
        <>
        <Date>{props.data.date}</Date>
        <SpaceInfo>{props.data.explanation}</SpaceInfo>
        </>

    )
}