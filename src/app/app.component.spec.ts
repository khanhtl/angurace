import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/layout/menu.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, MenuComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
  });

  it(`should have a title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('h1').textContent)
      .withContext('You should have an `h1` with the text Ponyracer')
      .toContain('Ponyracer');
  });

  it('should use the menu component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement;
    expect(element.query(By.directive(MenuComponent)))
      .withContext(
        'You probably forgot to add MenuComponent to the AppComponent template'
      )
      .not.toBeNull();
  });
});
