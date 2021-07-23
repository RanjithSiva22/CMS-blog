import { Component } from '@angular/core';

import { LocalStorageService } from "../localstorage.service";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent {

  public category = [{ name: "uncategory", value: false }];

  exisingPost = this.localStorageService.getItem(`blogs`) ? this.localStorageService.getItem(`blogs`) : [];

  public blog_details = JSON.parse(`${this.exisingPost}`);

  public addCategory(newcat) {
    
    // alert(newcat.category);
    this.category.push({ name: newcat.category, value: false });
    this.localStorageService.setItem(
      `category`,
      JSON.stringify(this.category)
    );
  }

  public change(a) {

    if (this.category[a].value == false)
      this.category[a].value = true;
    else
      this.category[a].value = false;

    // alert(a+" "+this.category[a].value);
  }


  public saveblog(blog) {
    let arr = [];

    let date = new Date();
    var n = date.toUTCString();
    let c = this.category.filter(i => {
      if (i.value == true) {
        arr.push(i.name);
      }
    });
    this.blog_details.push({ ...blog, category: arr, posteddate: n });
    // console.log(this.blog_details + " " + date);
    this.localStorageService.setItem(
      `blogs`,
      JSON.stringify(this.blog_details)
    );

  }

  constructor(private localStorageService: LocalStorageService) { }

  public ngOnInit() {

    let existingCategory = this.localStorageService.getItem(`category`) ?
      this.localStorageService.getItem(`category`) : [];

    this.category = JSON.parse(`${existingCategory}`);
  }

}
