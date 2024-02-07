import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, // Add FormsModule here
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'null'`, () => {
    expect(component.title).toEqual('my-app');
  });

  it('should render title', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const h1Element = compiled.querySelector('h1');
  // Check if h1 element exists and its text content contains 'my-app'
  expect(h1Element?.textContent).toContain('my-app');
});
});
