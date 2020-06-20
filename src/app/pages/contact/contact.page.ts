import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { SeoService } from 'src/app/services/seo/seo.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contact: ContactService,
    private seo: SeoService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Joshua Michael Waggoner - Contact',
      description: 'Contact page to get in touch with Joshua Michael Waggoner'
    });
  }

  /**
   * Submits the form
   * @param formData - The form data passed in
   */
  onSubmit(formData: FormData): void {
    this.contact.postMessage(formData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      }, error => {
        console.warn(error.responseText);
        console.log({ error });
      });
  }

  /**
   * Gets validation errors
   * @param form - The from passed in
   */
  getFormValidationErrors(form: FormGroup) {
    const result = [];
    Object.keys(form.controls).forEach(key => {

      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          result.push({
            control: key,
            error: keyError,
            value: controlErrors[keyError]
          });
        });
      }
    });

    return result;
  }

  get errorControl() {
    return this.contactForm.controls;
  }

}
