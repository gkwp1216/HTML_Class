async function initMap() {
    // 필요한 라이브러리 요청
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const BusanPolytech = { lat: 35.219016, lng: 129.019002 }; // 한국폴리텍부산캠퍼스

    const map = new Map(document.getElementById("map"), {
      center: BusanPolytech,
      zoom: 15,
      mapId: "4504f8b37365c3d0",
    });

    const marker = new AdvancedMarkerElement({
      map,
      position: BusanPolytech, // 한국폴리텍부산캠퍼스
    });

    const contentString = 
        '<h1>부산 폴리텍 대학</h1>' + 
        '<p><a href="https://www.kopo.ac.kr/busan" target="_blank">대학 홈페이지</a></p>';

    // InfoWindow 수정: 클래스 이름을 대소문자 구분하여 정확하게 수정
    const infoWindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: 'Busan PolyTech',
    });

    let isOpen = false;

    marker.addListener('click', () => {
        if (isOpen) {
            infoWindow.close(); // 이미 열려있으면 닫기
        } else {
            infoWindow.open({
                anchor: marker,
                map,
            }); // 닫혀있으면 열기
        }
        isOpen = !isOpen; // 상태 반전 (isOpen 사용)
    });
}

initMap();
