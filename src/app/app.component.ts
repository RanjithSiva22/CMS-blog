import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-site';
  add=true;
  view=false;
  // page={add:true};
  pagechange(a:Number){
    console.log(a);
    if(a==0){
      this.add=true;
      this.view=false;
    }
    else{
       this.add=false;
       this.view=true;
    }
  }
  
}
