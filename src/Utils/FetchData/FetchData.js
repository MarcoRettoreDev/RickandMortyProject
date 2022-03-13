const API = 'https://rickandmortyapi.com/api';

export const fetchData = fetch(`${API}/character`)
  .then(response => response.json())
  .then(character => 
    {
      console.log(character)
    })
