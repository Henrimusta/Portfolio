import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomImageComponent } from './bottom-image.component';

describe('BottomImageComponent', () => {
  let component: BottomImageComponent;
  let fixture: ComponentFixture<BottomImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
