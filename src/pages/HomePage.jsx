import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/MainButton.jsx';
import HomeMap from '../components/HomeMap.jsx';

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function HomePage() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/place-selection-gu');
    };

  return (
    <HomePageContainer>
        <NavBar />
        <HomeMap />
        <MainButton onClick={handleExploreClick}>
            어디로 가볼까요?
        </MainButton>
    </HomePageContainer>
        
  )
}
