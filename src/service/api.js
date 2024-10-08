import axios from 'axios';

export const fetchCities = async (query, limit = 5) => {
  const options = {
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
    params: { namePrefix: query, limit: limit },
    headers: {
      'x-rapidapi-key': "ae2609619cmsh5f32d620a3d3bf0p124f02jsn5083fa0f019e",
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  const response = await axios.request(options);
  return response.data;
};
