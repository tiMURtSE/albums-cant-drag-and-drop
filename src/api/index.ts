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

const client_id = '70f454f65af9455a866e5de8906295e9';
const client_secret = '568277a14ed44d8b913e102b922704c0';

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
    //   'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      'Authorization': 'Basic ' + window.btoa(client_id + ':' + client_secret),
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
};


export {
    SPOTIFY_URL,
    TOKEN,
    authOptions,
};