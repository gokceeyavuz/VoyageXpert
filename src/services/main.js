import {BaseURL} from './NetworkUrl';
const accessToken = 'JCeot9AljZAkHmk0pfwfH7gKKu7G';
const get = urlOption => {
  console.log('request', 'url:', urlOption);
  return fetch(BaseURL + urlOption, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => {
      console.log('Response received:', response); // Yanıtı logla
      if (!response.ok) {
        // Eğer response.ok değilse, hata detaylarını logla
        return response.json().then(err => {
          console.log('Error response:', err);
          throw new Error(`API Error: ${err.message || 'Unknown error'}`);
        });
      }
      return response.json(); // Başarılı yanıtı JSON'a çevir
    })
    .then(jsonResponse => {
      console.log('Response JSON:', jsonResponse); // JSON verisini logla
      return jsonResponse;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const post = (urlOption, body) => {
  console.log('request', 'url:', urlOption, 'body:', body);
  return fetch(BaseURL + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`, //bazı serviceler token gerektirir
    },
    body: JSON.stringify(body), //
  })
    .then(response => {
      const jsonResponse = response.json();
      console.log('response', 'url:', urlOption, 'response:', jsonResponse);
      return jsonResponse;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const put = (urlOption, body) => {
  console.log('request', 'url:', urlOption, 'body:', body);
  return fetch(BaseURL + urlOption, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      const jsonResponse = response.json();
      console.log('response', 'url:', urlOption, 'response:', jsonResponse);
      return jsonResponse;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post, put};
