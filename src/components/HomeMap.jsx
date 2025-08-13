import React, { useEffect } from 'react'

export default function HomeMap() {
    useEffect(() => {
        // 카카오맵 API가 로드될 때까지 기다리는 함수
        const initMap = () => {
            if (window.kakao && window.kakao.maps) {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(37.5721, 126.9854),
                    level: 10
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
    
  return (
    <div id="map" style={{width: '390px', height: '701px'}}></div>
  )
}
