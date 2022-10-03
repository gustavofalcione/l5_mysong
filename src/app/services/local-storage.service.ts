import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
   return this.storage.setItem(key, value);
  }

  get(key: string): string {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '[]');
    }
    return '';
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

}
