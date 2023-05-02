class LocalStorage {
    static get(key: string): { id: number, favoriteAlbumsId: Array<string> } {
        const dataFromStorage = JSON.parse(localStorage.getItem(key) || '');

        return dataFromStorage;
    }

    static set(key: string, value: any) {
        const formattedValue = JSON.stringify(value);
        
        localStorage.setItem(key, formattedValue);

        return value;
    }
}

export default LocalStorage;