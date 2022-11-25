import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
title!:string;
description!:string;
createDate!:Date;
snaps!:number;
  constructor() { }

  ngOnInit(): void {
    this.title="coucou";
    this.description="desc";
    this.createDate=new Date();
    this.snaps=4;
  }

affiche():void{
  
}

}
