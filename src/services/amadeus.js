import axios from 'axios';

const API_BASE_URL = 'https://test.api.amadeus.com';
const CLIENT_ID = `OizudDhGLDLmjEWZ73aHnQM5cTgzNYch`; // doğru client id
const CLIENT_SECRET = `pDb5RWpSGreDnWI5`; // doğru client secret

// Access token al
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/security/oauth2/token`,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data.access_token; // sadece token'ı dön
  } catch (error) {
    console.error(
      'Access token alma hatası:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

// Otel verilerini çek
export const getHotels = async (latitude, longitude) => {
  try {
    const token = await getAccessToken(); // Önce doğru access token al

    const response = await axios.get(
      `${API_BASE_URL}/v1/reference-data/locations/hotels/by-geocode`,
      {
        params: {
          latitude: latitude,
          longitude: longitude,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Dinamik olarak access token ekle
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(
      'Otel verisi alma hatası:',
      error.response?.data || error.message,
    );
    throw error;
  }
};
