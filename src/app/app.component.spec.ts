import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let statusBarSpy: { styleDefault: any };
  let splashScreenSpy: { hide: any };
  let platformReadySpy: Promise<void>;
  let platformSpy: { ready: any };

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
      ],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  it('should have menu labels', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(9);
    expect(menuItems[0].textContent).toContain('About');
    expect(menuItems[1].textContent).toContain('Skills');
    expect(menuItems[2].textContent).toContain('Experience');
    expect(menuItems[3].textContent).toContain('Contact');
    expect(menuItems[4].textContent).toContain('CodePen');
    expect(menuItems[5].textContent).toContain('GitHub');
    expect(menuItems[6].textContent).toContain('LinkedIn');
    expect(menuItems[7].textContent).toContain('Twitter');
    expect(menuItems[8].textContent).toContain('Instagram');
  });

  it('should have urls', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(9);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/about');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/skills');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/experience');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/contact');
    // expect(menuItems[3].getAttribute('href')).toEqual('https://codepen.io/rabbitfighter81');
    // expect(menuItems[4].getAttribute('href')).toEqual('https://github.com/rabbitfighter81');
    // expect(menuItems[5].getAttribute('href')).toEqual('https://www.linkedin.com/in/joshua-waggoner/');
    // expect(menuItems[6].getAttribute('href')).toEqual('https://twitter.com/rabbitfighter81');
    // expect(menuItems[7].getAttribute('href')).toEqual('https://www.instagram.com/rabbitfighter81/');
  });
});
