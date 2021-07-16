import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  data: any = 
  [{
      module_id : 1,
      title : "Conheça o Scratch",
      class : [{
          class_id : "1",
          title : "O que é Scratch?",
          url_youtube : "2ydQ0MLM0N0"
      },
      {
          class_id : "1",
          title : "O que é Scratch?",
          url_youtube : "IS5qd5qR1xs"
      }]
  },
  {
      module_id : 2,
      title : "Crie sua conta",
      class : [{
          title : "O que é Scratch?",
          url_youtube : "UgfsbL-uHOA"
      }]
  }];

  currentUrlVideo: string = "";
  
  ngOnInit(): void {
    this.currentUrlVideo = this.data[0].class[0].url_youtube;
  } 

  setVideoUrl(url: string) {
    this.currentUrlVideo = url;
  }
}
