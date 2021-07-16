import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() class: any;
  @Input() module: string = "";
  videoId: string = "";
  loading = false;
  constructor(private sanitizer: DomSanitizer){
  }

  ngOnInit(): void {
    this.videoId = this.class.youtube__video_id;
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.videoId);
  }

  changeClass() {
    
  }



}
