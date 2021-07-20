import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  currentClass: any;
  loading: boolean = true;
  currentModule: any = {};
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
          class_id : "2",
          title : "O que é Scratch?",
          youtube__video_id : "09R8_2nJtjg"
      }]
  },
  {
      module_id : 2,
      title : "Crie sua conta",
      class : [{
          class_id : "1",
          title : "O que é Scratch?",
          youtube__video_id : "zEe0AcpD6QM"
      }]
  }];

  
  ngOnInit(): void {
    this.currentClass = this.data[0].class[0];
    this.currentModule = {
      module_id: this.data[0].module_id,
      title: this.data[0].title,
    };
    this.hideLoading();
  } 

  setClass(pickedClass: any, module: any) {
    this.loading = true;
      if (pickedClass && module) {
        this.currentClass = pickedClass;
        this.currentModule = {
          module_id: module.module_id,
          title: module.title
        };
        this.hideLoading();
      }
  }

  hideLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  getClassChange($event: any) {
    console.log($event)
    let currentModule = $event.module;
    let currentClass = $event.class;
    let type = $event.type;

    this.currentModule = currentModule;

    this.data.forEach((module: any) => {
      if (module.module_id === currentModule.module_id) {
          const pickedClass = module.class.find((classTo: any) => {
          const newClass = this.prevOrNext(type, currentClass, classTo);
          return newClass;
        });
        this.setClass(pickedClass, currentModule);
        return;
      } 
    });
  }

  prevOrNext(type: string, current: any, classTo: any): any {
    if (type === "next") {
      console.log("next")
      return parseInt(current.class_id) + 1 === parseInt(classTo.class_id);
    } else {
      console.log("prev")

      return parseInt(current.class_id) - 1 === parseInt(classTo.class_id);
    }

  }
}
