import { NavigationItems, PagesName, PagesPath } from "types";

const SPOTIFY_API = 'https://api.spotify.com/v1/';
const CLIENT_ID = '70f454f65af9455a866e5de8906295e9';
const CLIENT_SECRET = '568277a14ed44d8b913e102b922704c0';

const pageTitle = 'BORINGAHHMUSIC';

const navigationItems: NavigationItems = [
    { path: PagesPath.Home, label: PagesName.Home },
    { path: PagesPath.Albums, label: PagesName.Albums },
];

export {
    SPOTIFY_API,
    CLIENT_ID,
    CLIENT_SECRET,
    navigationItems,
    pageTitle,
};