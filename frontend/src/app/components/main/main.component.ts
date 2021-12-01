
import { Component, OnInit, Input} from '@angular/core';
import {ElementRef} from '@angular/core';
import {lightTheme} from 'src/app/themes/light-theme';
import {darkTheme} from 'src/app/themes/dark-theme';
import { disableDebugTools } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {

  @Input() headerConsoleComand?: string = "";

  headerConsoleRoute:string         = "";
  headerConsoleDesiredComand:string = "cd Ampersand";
  currentTheme                      = darkTheme;
  htmlContent:string                = '';
  editorConfig: AngularEditorConfig = {
    editable: false,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  urlImg: string  = "https://avatars.githubusercontent.com/u/67862213?s=400&amp;u=df6f061706ddf5427b28fa2d5cd031932e626238&amp;v=4";
  urlImg2: string = "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.typeLetter();
  }

  typeLetter(): void{
    var headerConsoleComandLength:number = (this.headerConsoleComand) ? this.headerConsoleComand.length : 0;
    this.headerConsoleComand = this.headerConsoleDesiredComand.substr(0, headerConsoleComandLength +1);
    if(this.headerConsoleComand.length < this.headerConsoleDesiredComand.length){
      setTimeout(()=>{this.typeLetter()},100);
    }else{
      setTimeout(()=>{
        this.headerConsoleRoute  = "Ampersand";
        this.headerConsoleComand = "_";
      },300);
    }
  }


  getUsers(): void{

  }

  changeTheme():void{
    this.currentTheme = (this.currentTheme.name  == 'dark') ? lightTheme : darkTheme;

    for (const property in this.currentTheme.properties) {
      this.elementRef.nativeElement.closest('body').style.setProperty(property,this.currentTheme.properties[property]);
    }
  }

  execAmpersandShell(){
    switch(this.headerConsoleComand && this.headerConsoleComand.toLowerCase() || ""){
      case 'theme light':
        this.currentTheme = darkTheme;
        this.changeTheme();
        this.headerConsoleComand = "💡";
      break;
      case 'theme dark':
        this.currentTheme = lightTheme;
        this.changeTheme();
        this.headerConsoleComand = "🦇";
      break;
      case 'ampersand_':
        this.headerConsoleComand = "help";
      break;
      case 'help':
        this.headerConsoleComand = "Type 'theme dark' or 'theme light' to change between themes (PRESS ENTER TO CLEAR)"
      break;
      case '':
        this.headerConsoleComand = "Type 'theme dark' or 'theme light' to change between themes (PRESS ENTER TO CLEAR)"
      break;
      default:
        this.headerConsoleComand = "";
      break;
    }
  }

}
