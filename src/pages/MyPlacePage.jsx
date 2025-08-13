import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
const MyPlacePageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
`;

export default function MyPlacePage() {
  return (
    <MyPlacePageContainer>
        <NavBar />
    </MyPlacePageContainer>
  )
}
