import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ContactPage } from './contact.page';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactService } from 'src/app/services/contact/contact.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactPage', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule, SharedModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


function populateTestData(): void {
  this.contactForm.patchValue({
    firstName: 'Jack',
    lastName: 'Harkness',
    emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' },
    phone: '17777777777',
    message: 'Jack\'s awesome message',
  });
}
