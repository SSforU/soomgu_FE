import React, { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  /* 핵심: 한쪽만 지정 + aspect-ratio 로 다른 축을 자동 계산 */
  aspect-ratio: 390 / 701;

  /* 세로를 기준으로 채우되, 가로를 넘치지 않도록 클램프 */
  width: min(100%, calc(100dvh * (390 / 701)));
  /* height는 aspect-ratio에 따라 자동 계산됨 */

  /* 모바일에선 전체 화면으로 */
  @media (max-width: 1023.98px) {
    width: 100%;
    height: 100%;
  }
`;

export default function HomeMap() {
  useEffect(() => {
    // 카카오맵 API가 로드될 때까지 기다리는 함수
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5721, 126.9854),
          level: 10,
        };
        // eslint-disable-next-line no-unused-vars
        const map = new window.kakao.maps.Map(container, options);
      } else {
        // API가 아직 로드되지 않았다면 잠시 후 다시 시도
        setTimeout(initMap, 100);
      }
    };

    initMap();
  }, []);

  return <MapContainer id="map"></MapContainer>;
}
