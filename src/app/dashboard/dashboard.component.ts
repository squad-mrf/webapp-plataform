import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() class: any;
  @Input() module: any = {};
  @Input() blockNext: any;
  @Input() blockPrev: any;
  @Output() changeClass = new EventEmitter();

  safeUrl: any;
  loading = false;
  constructor(private sanitizer: DomSanitizer){
  }

  ngOnInit(): void {
    this.safeUrl = null;
    this.getSafeUrl();
  }

  getSafeUrl() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.class.youtube__video_id);
  }

  next() {
    this.change("next");
  }

  prev() {
    this.change("prev");
  }

  change(type: string) {
    this.changeClass.emit(
      {
        module: this.module, 
        class: this.class,
        type: type
      }
    );
  }



}
