import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NotFoundPage } from './not-found.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPage],
      imports: [IonicModule.forRoot(), SharedModule, RouterTestingModule, NotFoundPageRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
