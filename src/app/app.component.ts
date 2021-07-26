import { Component } from '@angular/core';
import { ConnectService } from './connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  currentClass: any;
  loading: boolean = true;
  blockNext: boolean = false;
  blockPrev: boolean = false;
  currentModule: any = {};
  data: any =
    [{
      module_id: 1,
      title: "Conheça o Scratch",
      class: [{
        class_id: 1,
        title: "O que é Scratch?",
        youtube__video_id: "09R8_2nJtjg"
      },
      {
        class_id: 2,
        title: "O que é Scratch2?",
        youtube__video_id: "09R8_2nJtjg"
      }]
    },
    {
      module_id: 2,
      title: "Crie sua conta",
      class: [{
        class_id: 1,
        title: "Crie 1?",
        youtube__video_id: "zEe0AcpD6QM"
      }]
    }];

  data2: any = [
    {
      "id": 1,
      "title_module": "Conheça o scratch",
      "class":
        [
          { 
            "class_id": 1, 
            "title": "Oque é scratch", 
            "youtube_url": "https://www.youtube.com/watch?v=VL9bpCjazT4" 
          }, 
          { 
            "class_id": 2, 
            "title": "Crie sua conta", 
            "youtube_url": "https://www.youtube.com/watch?v=VL9bpCjazT4" 
          }
        ]
    },
    {
      "id": 2,
      "title_module": "Animacoes",
      "class":
        [
          { 
            "class_id": 3,
            "title": "Estruturas de Blocos",
            "youtube_url": "https://www.youtube.com/watch?v=VL9bpCjazT4"
          }
        ]
    }]


  paginationData: any = [];

  constructor(
    private connectService: ConnectService
  ) {
    this.connectService.getModules().subscribe((res: any) => {
      console.log(res)
    });
    this.data2.forEach((res: any) => {
      res.class.forEach((cl: any) => {
        cl.moduleId = res.id;
        cl.moduleTitle = res.title_module;
        this.paginationData.push(cl);
      })
    })
  }


  ngOnInit(): void {
    this.initialClass();
    this.hideLoading();
  }

  initialClass() {
    this.currentClass = this.paginationData[0];
    this.currentModule = {
      module_id: this.paginationData[0].module_id,
      title: this.paginationData[0].title,
    };
    this.blockNext = false;
    this.blockPrev = true;
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

    this.blockingPaginationButtons(pickedClass);

  }

  blockingPaginationButtons(pickedClass: any) {
    const paginationClass = this.getPageClass(pickedClass);

    if (this.paginationData.indexOf(paginationClass) === this.paginationData.length - 1) {
      this.blockPrev = false;
      this.blockNext = true;
    } else if (this.paginationData.indexOf(paginationClass) === 0) {
      this.blockPrev = true;
      this.blockNext = false;
    } else {
      this.blockPrev = false;
      this.blockNext = false;
    }
  }

  hideLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  getClassChange($event: any) {
    const currentClass = $event.class;
    let type = $event.type;

    const newPageClass = this.getPageClass(currentClass);

    if (type === "next") {
      const newClass = this.getNewClassAndModule(newPageClass, type).newClass;
      const newModule = this.getNewClassAndModule(newPageClass, type).newModule;
      this.setClass(newClass, newModule);
    } else {
      const newClass = this.getNewClassAndModule(newPageClass, type).newClass;
      const newModule = this.getNewClassAndModule(newPageClass, type).newModule;
      this.setClass(newClass, newModule);
    }
  }

  getNewClassAndModule(newPageClass: any, type: string): any {
    const prevIndex =
      type === "next"
        ? this.paginationData.indexOf(newPageClass) + 1
        : this.paginationData.indexOf(newPageClass) - 1;
    const newClass = this.paginationData[prevIndex];
    const newModule = {
      module_id: newClass.moduleId,
      title: newClass.moduleTitle
    }

    return { newClass, newModule }
  }

  getPageClass(currentClass: any): any {
    const pageClass = this.paginationData.find((page: any) => {
      return currentClass.class_id === page.class_id &&
        currentClass.moduleId === page.moduleId ? page : null
    });

    return pageClass;
  }

}
