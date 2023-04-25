import { NavigationItems, PagesName, PagesPath } from "types";

const navigationItems: NavigationItems = [
    { path: PagesPath.Home, label: PagesName.Home },
    { path: PagesPath.Albums, label: PagesName.Albums },
];

const pageTitle = 'BORINGAHHMUSIC';

export {
    navigationItems,
    pageTitle,
};