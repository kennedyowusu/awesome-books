class LocalStorage {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

 getLocalStorage = () => JSON.parse(localStorage.getItem(this.storageKey));

 setLocalStorage = (data) => localStorage.setItem(this.storageKey, JSON.stringify(data));
}

export default LocalStorage;