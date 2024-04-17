import { Component } from '@angular/core';
import { ModulesCommunicationService } from '../shared/services/modules-communication-service.service';

@Component({
  selector: 'app-submodule-b',
  templateUrl: './submodule-b.component.html',
  styleUrl: './submodule-b.component.css'
})
export class SubmoduleBComponent {
  constructor(private communicationService: ModulesCommunicationService) {}

  getData() {
    return this.communicationService.getData();
  }
}
