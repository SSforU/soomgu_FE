import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const TopNavigation = styled.div`
  position: absolute;
  top: 60px;
  left: 29px;
  display: flex;
  align-items: center;
  gap: 92px;
  z-index: 10;
`;

const NavigationTabs = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const Tab = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: ${props => (props.active ? '#000000' : '#cfcfcf')};
  cursor: pointer;
  white-space: nowrap;
`;

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTabClick = (tab) => {
    switch (tab) {
      case 'home':
        navigate('/');
        break;
      case 'places':
        navigate('/my-place');
        break;
      case 'character':
        navigate('/character');
        break;
      default:
        break;
    }
  };

  return (
    <TopNavigation>
      <NavigationTabs>
        <Tab active={pathname === '/'} onClick={() => handleTabClick('home')}>홈</Tab>
        <Tab active={pathname.startsWith('/my-place')} onClick={() => handleTabClick('places')}>나의 장소</Tab>
        <Tab active={pathname.startsWith('/character')} onClick={() => handleTabClick('character')}>구니 키우기</Tab>
      </NavigationTabs>
    </TopNavigation>
  );
}
