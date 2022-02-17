import { fetchData } from '../utils/fetchData.mjs';
const API = 'https://rickandmortyapi.com/api/character/';

const title = document.getElementsByClassName('card-title');

const myFunction = async (url_api) =>
{
  try
  {
    const data1 = await fetchData(url_api);
    const data2 = await fetchData(data1.results[0].origin.url);
    const { count } = data1.info; // Cant de personajes
    const { name } = data1.results[0]; // Nombre
    const { image } = data1.results[0]; // URL IMG
    const { dimension } = data2; // Nombre dimensión
    title[0].innerHTML = name;
  }
  catch(error)
  {
    console.error(error);
  }
}

myFunction(API);