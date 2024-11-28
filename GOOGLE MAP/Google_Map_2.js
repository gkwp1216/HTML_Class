async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: 35.210794, lng: 129.005545 }, // 덕천역
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 35.219016, lng: 129.019002 }, // 한국폴리텍부산캠퍼스
    });
  }
  
  initMap();