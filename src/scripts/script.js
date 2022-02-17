const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

const myFunction = async (url_api) =>
{
  try
  {
    const data1 = await fetchData(url_api);
    console.log(data1);
  }
  catch(error)
  {
    console.error(error);
  }
}

myFunction(API);