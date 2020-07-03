import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardManagerComponent } from './board-manager.component';
import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoardManagerComponent', () => {
  let component: BoardManagerComponent;
  let fixture: ComponentFixture<BoardManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardManagerComponent ],
      imports: [ EntityDataModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
