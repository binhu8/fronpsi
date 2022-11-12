import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from 'src/app/core/services/loading.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error: any = {}

  public form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  public faLock = faLock
  constructor(
    private loginService: LoginService, 
    private router: Router,
    private loadingSerive: LoadingService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.loadingSerive.show()
    this.loginService.checkUserLogin(this.form.value).subscribe(res => {
      if(res.error){
        this.error = res
      }else{
        localStorage.clear()
        let user = JSON.stringify(res)
        localStorage.setItem('userData', user );
        localStorage.setItem('crp', res.crp)
        this.router.navigate(['/'])
      }
      this.loadingSerive.hide()
    })
  }

}
