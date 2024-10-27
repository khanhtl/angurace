import {
  DebugElement,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RacesComponent } from './races.component';
import { RaceComponent } from './ui/race/race.component';

describe('RacesComponent', () => {
  let fixture: ComponentFixture<RacesComponent>;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacesComponent, RaceComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacesComponent, RaceComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should display every race', () => {
    const races = debugElement.queryAll(By.directive(RaceComponent));
    expect(races.length)
      .withContext('You should have two `RaceComponent` displayed')
      .toBe(2);
  });
});
