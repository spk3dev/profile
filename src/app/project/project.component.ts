import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects : Array<any>

  constructor() { }

  ngOnInit() {
    this.projects = [{
      image : "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/12/1f/68/121f683e-e60f-4b3a-5b3d-4555899d1e6b/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png",
      link : "https://www.trendywash.net/",
      name : "Trendy Wash",
      detail : "พัฒนาส่วนของการเข้าสู่ระบบด้วย Facebook, Line, Google signin และ Apple id และอัปเดทขึ้นสโตร์ทั้ง ios และ android",
      tools : ["react native"]
    }]
  }

}
