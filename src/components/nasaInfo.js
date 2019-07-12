import React from 'react';
import styled from 'styled-components';
const Date = styled.h2``;

export default function Info(props) {
    return (
        <Date>{props.data.date}</Date>
        <About>{props.data.explanation}</About>

    )
}