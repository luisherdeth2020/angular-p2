import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  // sólo en mi servici
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    //borro el tag anterior
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    // inserta el nuevo elemento al principio(inicio)
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  // nuevo método que no devuelve nada
  searchTag(tag: string): void {
    // para añadir al principio
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    // this._tagsHistory.unshift(tag);
    console.log(this.tagsHistory);
  }
}
