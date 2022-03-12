const FetchData = async (url_api) =>
{
  return fetch(url_api)
  .then ((response)=> { console.log(response.json())})
  .then ((data) => {
    console.log(data);
  })
  .catch((error)=>{
    console.error(error);
  })
};

export { FetchData };