import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModulesCommunicationService } from '../shared/services/modules-communication-service.service';

@Component({
  selector: 'app-submodule-a',
  templateUrl: './submodule-a.component.html',
  styleUrl: './submodule-a.component.css'
})
export class SubmoduleAComponent implements AfterViewInit {
  inputText!: string;

  constructor(private communicationService: ModulesCommunicationService) {}

  ngAfterViewInit(): void {
    this.inputText = this.communicationService.getData();
  }

  setData() {
    this.communicationService.setData(this.inputText);
  }
}
