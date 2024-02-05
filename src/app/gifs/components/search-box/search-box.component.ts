import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  // @ViewChild -> tener una referencia local
  @ViewChild('txtTagInput')
  // "!" <- siempre vas a tener un valor
  public tagInput!: ElementRef<HTMLInputElement>;
  // inyectar el servicio
  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
    // cajita "morada" = método (searchTag)
    this.gifsService.searchTag(newTag);

    // limpiar
    this.tagInput.nativeElement.value = '';
  }
}
