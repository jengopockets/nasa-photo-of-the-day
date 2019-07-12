import React from 'react';
import styled from 'styled-components';
const Date = styled.h2``;
const SpaceInfo = styled.p``;

export default function Info(props) {
    return (
        <>
        <Date>{props.data.date}</Date>
        <SpaceInfo>{props.data.explanation}</SpaceInfo>
        </>

    )
}