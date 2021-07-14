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
          url_youtube : "https://www.youtube.com/watch?v=2ydQ0MLM0N0&ab_channel=HIPHOPMIX"
      },
      {
          class_id : "1",
          title : "O que é Scratch?",
          url_youtube : "https://www.youtube.com/watch?v=2ydQ0MLM0N0&ab_channel=HIPHOPMIX"
      }]
  },
  {
      module_id : 2,
      title : "Crie sua conta",
      class : [{
          title : "O que é Scratch?",
          url_youtube : "https://www.youtube.com/watch?v=2ydQ0MLM0N0&ab_channel=HIPHOPMIX"
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
