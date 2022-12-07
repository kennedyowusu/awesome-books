class LocalStorage {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

 static getLocalStorage = () => JSON.parse(localStorage.getItem(this.storageKey));

 static setLocalStorage = (data) => localStorage.setItem(this.storageKey, JSON.stringify(data));
}

export default LocalStorage;