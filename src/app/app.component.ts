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
  data: any = [];


  paginationData: any = [];

  constructor(
    private connectService: ConnectService
  ) {
  
   
  }


  ngOnInit(): void {
    this.connectService.getModules().subscribe((res: any) => {
      this.data = res;
      this.data.forEach((res: any) => {
        res.class.forEach((cl: any) => {
          cl.moduleId = res.id;
          cl.moduleTitle = res.title_module;
          this.paginationData.push(cl);
        })
      })
      this.initialClass();
      this.hideLoading();
    });
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
