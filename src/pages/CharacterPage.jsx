import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
const CharacterPageContainer = styled.div`
  position: relative;   
    width: 100%;
    height: 100%;
    background: #ffffff;
    overflow: hidden;
`;

export default function CharacterPage() {
  return (
    <CharacterPageContainer>
        <NavBar />
    </CharacterPageContainer>
  )
}
