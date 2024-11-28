async function initMap() {
    // Request needed libraries.
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
        '<p><a href ="https://www.kopo.ac.kr/busan">대학 홈페이지</a></p>'

    const infoWindow = new google.maps.infoWindow({
        content : contentString,
        ariaLabel: 'Busan PolyTech',
    })
    marker.addListener('click',()=>{
        infoWindow.open({
            anchor: marker,
            map,
        })
    })
  }
  
  initMap();