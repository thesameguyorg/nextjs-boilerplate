import fetch from 'node-fetch';

function fetchProfiles() {
  return fetch('https://onlysearch.co/api/search?keyword=&location=&sortBy=&priceFrom=0&priceTo=50&page=1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      throw error;
    });
}

export { fetchProfiles };
