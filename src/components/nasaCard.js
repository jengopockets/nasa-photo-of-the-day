import React from 'react';
import styled from 'styled-components';
import Photo from './nasaPhoto';
import Info from './nasaInfo';
const SpaceCard = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`;

export default function Card(props) {
    return (
        <SpaceCard>
            <Photo data={props.data}/>
            <Info data={props.data} />
        </SpaceCard>
    )
}