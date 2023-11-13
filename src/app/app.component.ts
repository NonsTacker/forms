import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public animal : string = 'Cat';
  public count = 1;
  out1: string = ""; 
  out2: string = "";
  out3: string = "";
  out4: string = "";
  submitted: boolean = false;

  onSubmit(form: NgForm) {
    this.submitted = true;
    if(this.animal.toLowerCase() === "cat") {
      this.out1 = "\\    /\\";
      this.out2 = "  )  (   ')";
      this.out3 = " (  /    )";
      this.out4 = "  \\(___)|";
    } else if(this.animal.toLowerCase() === "mouse") {
      this.out1 = "  __QQ"
      this.out2 = " (_)_\">";
      this.out3 = "_)";
    } else if(this.animal.toLowerCase() === "bunny") {
      this.out1 = " ╱|、"
      this.out2 = "(˚ˎ 。7";
      this.out3 = "|、˜〵";
      this.out4 = "じしˍ,)ノ";
    } else {
      this.out1 = "Fuk u";
    }
  }
}
