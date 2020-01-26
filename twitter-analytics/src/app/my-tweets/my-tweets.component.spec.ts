import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";

import { MyTweetsComponent } from './my-tweets.component';

/*const tweetsToUse: Tweet[] = [
  {content: "Hello world !"} as Tweet,
  {content: "Hello other people !"} as Tweet
]*/
describe('MyTweetsComponent', () => {
  let component: MyTweetsComponent;
  let fixture: ComponentFixture<MyTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const titleElements = fixture.debugElement.queryAll(By.css('h1'));
    expect(titleElements.length).toBe(1);
    expect(titleElements[0].nativeElement.innerHTML).toBe('My tweets');
  })
});
