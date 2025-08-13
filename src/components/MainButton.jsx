import React from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  position: absolute;
  bottom: 49px;
  left: 25px;
  right: 25px;
  width: auto;
  height: 50px;
  background: #ff7e74;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    background: #ff6b61;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default function MainButton(props) {
    const { onClick, children} = props;
  return (
    <ButtonWrapper onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}
