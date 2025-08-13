import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/MainButton.jsx';

const HomePageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

export default function HomePage() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/place-selection-gu');
    };

  return (
    <HomePageContainer>
        <NavBar />

        <MainButton onClick={handleExploreClick}>
            어디로 가볼까요?
        </MainButton>
    </HomePageContainer>
        
  )
}
