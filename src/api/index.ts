// const API_URL = 'http://ws.audioscrobbler.com/2.0/';

// const API_KEY = '8ee454ea383a501768486f1c03fb701d';

const SPOTIFY_URL = 'https://api.spotify.com/v1/';

const TOKEN = 'BQDduAauM2xxLqACRlWSjsf7a_PK2PbbPS-SUNEWJQt1STQhgIU-S7knW-DQAjDLgoBAVwR1QfETwewO9SZCBTekeAyirREWM4plp9N7r2z9YRndpbRi6ITJI7W0jL04lpV3A8mZ3baiaWVfRHJJkDGqQ9UJYh0ghBMl_fWkjr7u9nb_AUOQFlTfQlde8JwkgIbwz8SwZmc7UCmIQ4c0EWruCodkG6wTbj3JYrszrd2R8VIwCuQXTHEvMZ7M3kanWxUtjknVoWMCVQK8mM7yqLU6pLVqOmoghKk5r_AH6BrtVzlCwDFZXokdkQQWoyq4DhVcbfqZTQTVplpUhVNd44Pomltb_9-e4nODBNDOdoY';


// const formatResponse = (response: any): Array<object> => {
//     let albums = response.results.albummatches.album;
//     console.log(albums)

//     albums = albums.map(({ name, artist, image }: any) => {
//         return {
//             title: name,
//             artist,
//             image: image.at(-1)['#text'],
//         }
//     });

//     return albums;
// };

export {
    SPOTIFY_URL,
    TOKEN,
};