export class SetStorage {
  public static setLocalStorage(name: string, data: string) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}
