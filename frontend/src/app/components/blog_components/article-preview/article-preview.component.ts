import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  title:string       = "Make Your CSS Dynamic with CSS Custom Properties";
  date:string        = "Nov 23";
  urlImg: string     = "https://avatars.githubusercontent.com/u/67862213?s=400&amp;u=df6f061706ddf5427b28fa2d5cd031932e626238&amp;v=4";
  urlImg2: string    = "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"
  tags:Array<string> = ["JS","HTML","CSS"];

  constructor() { }

  ngOnInit(): void {
  }

}
