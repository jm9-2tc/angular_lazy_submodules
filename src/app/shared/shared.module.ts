import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModulesCommunicationService } from './services/modules-communication-service.service';


@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ModulesCommunicationService]
    };
  }
}
