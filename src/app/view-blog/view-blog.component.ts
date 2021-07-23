import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../localstorage.service";
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  public allblogs = [];
  public category=[];
  constructor(private localStorageService: LocalStorageService) { }

  public blogFilter(fil) {
    let arr= JSON.parse(this.localStorageService.getItem(`blogs`));
    let x = [];
    let filteredblogs = arr.filter(blog => {
      if (blog.category.includes(fil.category)) {
        x.push(blog);
      }
    });
    this.allblogs = [...x];
    console.log(this.allblogs);
  }

  public viewblog(index){
    let blog=JSON.parse(this.localStorageService.getItem(
      `blogs`
    ));
    let findblog=blog[index];
    alert(findblog.title+" - "+findblog.detail);
    console.log(findblog);
  }




  ngOnInit() {
    this.allblogs = JSON.parse(this.localStorageService.getItem(
      `blogs`
    ));
    this.category=JSON.parse(this.localStorageService.getItem(
      `category`
    ));
    // console.log(this.allblogs);

  }

}
