import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() numLikes: number;
  @Input() imgProfile: String;
  @Input() imgPost: String;
  @Input() location: String;
  @Input() comments: String[];
  @Input() postOwner: String;
  @Input() postDescription: String;
  @Input() isLiked: boolean;
  public comment: String;
  constructor() { 
    this.comments= []
    this.isLiked = false;
  }

  ngOnInit(): void {
  }

  changeLikeStatus(){
    this.isLiked = !this.isLiked;
    if(this.isLiked){
      this.numLikes ++;
    }
    else{
      this.numLikes --;
    }
  }
  addComment() {
    this.comments.push(this.comment);
    console.log("Hello");
  }

}
