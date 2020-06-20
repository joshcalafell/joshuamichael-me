import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SkillsCollectionServiceMock } from './skills-collection.service.mock';

describe('SkillsService', () => {
  let service: SkillsCollectionServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule, AngularFirestoreModule],
      providers:[SkillsCollectionServiceMock]
    }).compileComponents();
    service = TestBed.inject(SkillsCollectionServiceMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
