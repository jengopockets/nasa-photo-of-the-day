import React from 'react';
import styled from 'styled-components';
import Photo from './nasaPhoto';
import Info from './nasaInfo';
const SpaceCard = styled.div`
display: flex;
flex-direction: column;
align-items:center;
border: 12px solid black;
border-radius: 15%;
background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4305ffe1-d575-4d21-aa54-602dfae6c854/dd4l6th-cdd2a2a6-27d4-4c01-9ce2-70b6978527ea.jpg/v1/fill/w_1280,h_849,q_75,strp/starry_night_sky_background_by_shadowneko23_dd4l6th-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ5IiwicGF0aCI6IlwvZlwvNDMwNWZmZTEtZDU3NS00ZDIxLWFhNTQtNjAyZGZhZTZjODU0XC9kZDRsNnRoLWNkZDJhMmE2LTI3ZDQtNGMwMS05Y2UyLTcwYjY5Nzg1MjdlYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ojZbnAAUrHPAvyhqp882xXVj3RsrB964QsFxMJfewWY");
`;

export default function Card(props) {
    return (
        <SpaceCard>
            <Photo data={props.data}/>
            <Info data={props.data} />
        </SpaceCard>
    )
}