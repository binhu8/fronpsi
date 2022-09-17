import { Component, OnInit } from '@angular/core';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public downChevron = faCircleChevronDown

  public response: any = {
    img: 'https://i.ibb.co/PZBSyT5/carol.png',
    name: 'Carol Amaral'
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
   let item: any  = localStorage.getItem('userData')
   this.response = JSON.parse(item)
  }

}
