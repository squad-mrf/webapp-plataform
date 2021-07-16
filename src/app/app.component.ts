import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  currentClass: any;
  currentModuleTitle: string = "";
  data: any = 
  [{
      module_id : 1,
      title : "Conheça o Scratch",
      class : [{
          class_id : "1",
          title : "O que é Scratch?",
          youtube__video_id : "09R8_2nJtjg"
      },
      {
          class_id : "1",
          title : "O que é Scratch?",
          youtube__video_id : "09R8_2nJtjg"
      }]
  },
  {
      module_id : 2,
      title : "Crie sua conta",
      class : [{
          title : "O que é Scratch?",
          youtube__video_id : "09R8_2nJtjg"
      }]
  }];

  
  ngOnInit(): void {
    this.currentClass = this.data[0].class[0];
    this.currentModuleTitle = this.data[0].title;
  } 

  setClass(pickedClass: any, moduleTitle: string) {
    this.currentClass = pickedClass;
    this.currentModuleTitle = moduleTitle;
  }
}
