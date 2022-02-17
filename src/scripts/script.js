import { fetchData } from '../utils/fetchData.mjs';
const API = 'https://rickandmortyapi.com/api/character/';

const titleField = document.getElementsByClassName('card-title');
const statusField = document.getElementsByClassName('card-status');
const dimensionField = document.getElementsByClassName('card-dimension');
const imgURL = document.getElementsByClassName('img-container');

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

    titleField[0].innerHTML = name;
    dimensionField[0].innerHTML = dimension;
    imgURL[0].firstElementChild.setAttribute('src', image);
  }
  catch(error)
  {
    console.error(error);
  }
}

myFunction(API);