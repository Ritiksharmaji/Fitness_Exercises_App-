
export const exerciseOptions = {
    method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
  };

  export const youtubeOptions = {
    method: 'GET',
    path: '/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw',
    headers: {
      'x-rapidapi-key': 'c3e3069a9dmsh152fb5036654ac2p1b5a6fjsn41cd010862dc',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };