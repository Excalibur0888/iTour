import { Suggest, Geocoder } from 'react-native-yamap';

export const fetchSuggestions = async (text, setSuggestions) => {
  if (!text.trim()) {
    setSuggestions([]);
    return;
  }

  try {
    const suggestionsList = await Suggest.suggestWithCoords(text);
    setSuggestions(suggestionsList);
  } catch (error) {
    console.error('Ошибка при поиске подсказок:', error);
    setSuggestions([]);
  }
};

export const handleSuggestionPress = async (suggestion, setSearchLocation, setSuggestions, mapRef) => {
  const { title } = suggestion;
  const location = await getCoordinates(title);

  if (location) {
    setSearchLocation(location);
    setSuggestions([]);
    if (mapRef.current) {
      mapRef.current.setCenter(
        { lat: location.latitude, lon: location.longitude },
        15
      );
    }
  } else {
    alert('Не удалось установить координаты для подсказки.');
  }
};

export const getCoordinates = async (address) => {
  try {
    const geoData = await Geocoder.addressToGeo(address);
    if (geoData && geoData.lat && geoData.lon) {
      return { latitude: geoData.lat, longitude: geoData.lon };
    }
  } catch (error) {
    console.error('Ошибка при геокодировании:', error);
  }
  return null;
};
