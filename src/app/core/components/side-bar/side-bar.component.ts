import { Component } from '@angular/core';
import { SideMenu } from '../../utils/side-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  menus:SideMenu[]=[
    {name:'Dashboard', isActive:true,img:'', url:'home'},
    {name:'Projects', isActive:false,img:'',url:'project'},
    {name:'Tasks', isActive:false,img:'',url:'task'},
    {name:'Requests', isActive:false,img:'',url:'request'},
    {name:'Features', isActive:false,img:'',url:'feature'},
    {name:'Settings', isActive:false,img:'',url:'login'}
  ]
  constructor(
    private route: Router,
) 
{

}
  changeMenuSelection(menu:SideMenu)
  {
    this.menus.forEach(f=>{
      f.isActive= f.name==menu.name
    });
      this.route.navigateByUrl(`/${menu.url}`);

  }
}
