export default {
  getFullRequest(baseUrl) {
    return fetch(baseUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data;
      });
  },
};
