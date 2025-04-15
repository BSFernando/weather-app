import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeatherDataComponent } from './get-weather-data.component';

describe('GetWeatherDataComponent', () => {
  let component: GetWeatherDataComponent;
  let fixture: ComponentFixture<GetWeatherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetWeatherDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
