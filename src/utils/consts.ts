import { NavigationItems, PagesName, PagesPath } from "types";

const apiKey: string = '8ee454ea383a501768486f1c03fb701d';

const navigationItems: NavigationItems = [
    { path: PagesPath.Home, label: PagesName.Home },
    { path: PagesPath.Albums, label: PagesName.Albums },
];

const pageTitle: string = 'BORINGAHHMUSIC';

export {
    apiKey,
    navigationItems,
    pageTitle,
};