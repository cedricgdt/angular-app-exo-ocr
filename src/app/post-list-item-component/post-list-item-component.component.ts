import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreateAt: string;


  constructor() { }

  ngOnInit() {
  }

  getAdd() {
    this.postLoveIts = this.postLoveIts + 1;
  }
  getRemove() {
    this.postLoveIts = this.postLoveIts - 1;
  }

}
