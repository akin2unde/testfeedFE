import { Component, OnInit } from '@angular/core';
import { SideMenu } from '../../utils/side-menu';
import { Router } from '@angular/router';
import { AppUtilService } from '../../services/app-util.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  menus:SideMenu[]=[
    {name:'Dashboard', isActive:true,img:'', url:'home'},
    {name:'Project', isActive:false,img:'',url:'project'},
    {name:'Task', isActive:false,img:'',url:'task'},
    {name:'Request', isActive:false,img:'',url:'request'},
    {name:'Feature', isActive:false,img:'',url:'feature'},
    {name:'Setting', isActive:false,img:'',url:'login'}
  ]
  constructor(private route: Router, private appUtilService:AppUtilService) 
  {
    appUtilService.sideMenu$.subscribe(s=>{
      if(this.menus.find(a=>a.isActive && a.name==s)==null)
      this.changeMenuSelection(this.menus.find(f=>f.name==s),false)
    });
  }
  ngOnInit()
  {
  }
  changeMenuSelection(menu:SideMenu,executeRoute:boolean=true)
  {
    this.menus.forEach(f=>{
      f.isActive= f.name==menu.name
    });
    if(executeRoute)
      this.route.navigateByUrl(`/${menu.url}`);
  }
}
