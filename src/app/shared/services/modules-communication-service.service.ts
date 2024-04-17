import { Injectable } from '@angular/core';

@Injectable()
export class ModulesCommunicationService {
  private data!: string;

  public setData(data: string) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }
}
