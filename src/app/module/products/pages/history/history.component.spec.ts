import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { HttpClientModule } from '@angular/common/http';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryComponent, HttpClientModule]
    });
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
