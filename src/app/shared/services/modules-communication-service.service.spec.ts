import { TestBed } from '@angular/core/testing';

import { ModulesCommunicationService } from './modules-communication-service.service';

describe('ModulesCommunicationServiceService', () => {
  let service: ModulesCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulesCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
