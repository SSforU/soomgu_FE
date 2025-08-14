import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
import MyPlaceComp from '../components/MyPlaceComp.jsx';
const MyPlacePageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default function MyPlacePage() {
  const places = [
    { guName: '동작구', subwayLines: [1, 2, 3, 4, 5, 6] },
    { guName: '관악구', subwayLines: [2, 7, 9] },
    { guName: '강남구', subwayLines: [2, 3, 7] }
  ]
  return (
    <MyPlacePageContainer>
        <NavBar />
        {places.map(({ guName, subwayLines }) => (
          <MyPlaceComp
            key={guName}
            guName={guName}
            subwayLines={subwayLines}
          />
        ))}
    </MyPlacePageContainer>
  )
}
