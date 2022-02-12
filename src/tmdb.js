const API_KEY = '42e03123687358e94df50859866da0df';
const API_BASE = 'https://api.themoviedb.org/3';

/* originais da Netflix
recomendados
ação
comédia
terror
romance
documentários
drama
 */
/*  Função fetch() que é responsável por fazer uma requisição, utilizando um endpoint e retorna o resultado dessa requisição em json()  */
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

/* exportar um JSON que vai ter as funções que irão pegar as informações da minha API  */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async() => {
        return [
        {
            slug:'originals',
            title: 'Originais da Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'documentary',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'drama',
            title: 'Drama',
            items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
        },
        

    ];
  },
  getMovieInfo: async (movieID,type) => {
    let info = {}
    if(movieID) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
        break;
      }
    }
    return info;
  }

}