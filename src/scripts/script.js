import { fetchData } from '../utils/fetchData.mjs';
import { cardMaker } from '../utils/cardMaker.mjs';
const API = 'https://rickandmortyapi.com/api/character/';

const cardswrapper = document.getElementById('cards-wrapper');
const selectList = document.getElementById('select-list');

var maxPages = selectList.value;



const getData = async () =>
{
  try
  {
    const { results } = await fetchData(API);
    results.map (character =>
      {
        const card = cardMaker(character);
        cardswrapper.appendChild(card);
      })
  }
  catch(error)
  {
    console.error(error);
  }
}

const pagesNumber = (maxPages) =>
{
  for(let i = 0 ; i<= maxPages ; i++)
  {
    getData(i);
  }
};

pagesNumber(maxPages);

const random = () =>
{
  console.log(maxPages);
}

var button = document.getElementById('button-showme');
button.addEventListener('click', random);