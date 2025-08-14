import React from 'react'
import styled from 'styled-components'

// Styled Components
const Container = styled.div`
  background: #ffffff;
  position: relative;
  border-radius: 10px;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 120px;
`

const ImageArea = styled.div`
  position: absolute;
  background: #d9d9d9;
  left: 15px;
  border-radius: 10px;
  width: 90px;
  height: 90px;
  top: 15px;
`

const ContentArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  left: 120px;
  top: 28px;
`

const GuNameSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`

const GuName = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  color: #000000;
  font-size: 18px;
  text-align: left;
  line-height: 20px;
`

const SubwayLinesContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  width: 140px;
  flex-wrap: wrap;
`

const SubwayLineIcon = styled.div`
  width: 20px;
  height: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  background-image: ${props => `url('${props.imageUrl}')`};
`

const IconsSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || '2px'};
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  background-image: ${props => `url('${props.imageUrl}')`};
`

const IconText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  color: #000000;
  font-size: 14px;
  text-align: left;
  line-height: 20px;
`

export default function MyPlaceComp({ guName, subwayLines = [] }) {
  // 지하철 노선별 이미지 매핑 (실제 이미지 경로로 수정 필요)
  const subwayLineImages = {
    1: '/icons/line1.png',
    2: '/icons/line2.png',
    3: '/icons/line3.png',
    4: '/icons/line4.png',
    5: '/icons/line5.png',
    6: '/icons/line6.png',
    7: '/icons/line7.png',
    8: '/icons/line8.png',
    9: '/icons/line9.png',
  }

  return (
    <Container>
      <ImageArea />
      
      <ContentArea>
        <GuNameSection>
          <GuName>{guName}</GuName>
          <SubwayLinesContainer>
            {subwayLines.map((line, index) => (
              <SubwayLineIcon
                key={index}
                imageUrl={subwayLineImages[line]}
              />
            ))}
          </SubwayLinesContainer>
        </GuNameSection>
        
        <IconsSection>
          <IconGroup>
            <Icon imageUrl="/icons/📍 Round Pushpin.png" />
            <IconText>0</IconText>
          </IconGroup>
          
          <IconGroup gap="2px">
            <Icon imageUrl="/icons/😍 Smiling Face With Heart Eyes Frontal.png" />
            <IconText>0</IconText>
          </IconGroup>
          
          <IconGroup gap="2px">
            <Icon imageUrl="/icons/😊 Smiling Face With Smiling Eyes Frontal.png" />
            <IconText>0</IconText>
          </IconGroup>
          
          <IconGroup gap="2px">
            <Icon imageUrl="/icons/😑 Expressionless Face Frontal.png" />
            <IconText>0</IconText>
          </IconGroup>
          
          <IconGroup gap="2px">
            <Icon imageUrl="/icons/😓 Downcast Face With Sweat Frontal.png" />
            <IconText>0</IconText>
          </IconGroup>
        </IconsSection>
      </ContentArea>
    </Container>
  )
}
