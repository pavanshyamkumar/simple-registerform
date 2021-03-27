import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  soo = "";
  sooo = "";
  four = "";
  five = "";
  b = "";
  too(val: string) {
    this.soo = val;
  }
  tooo(val: string) {
    this.sooo = val;
  }
  t(val: string) {
    this.four = val;
  }
  tt(val: string) {
    this.five = val;
  }
  ttt(val: string) {
    this.b = val;
  }
}
