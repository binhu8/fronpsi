import { Component, Input, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { CepService } from 'src/app/services/cep/cep.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  @Input() data: any
  readonly: boolean = true
  faLocker = faLock

  constructor(private userDataService: UserDataService, private cepService: CepService) { }

  ngOnInit(): void {
  }

  updateUser(): void{
    
    this.userDataService.updateUser(this.data).subscribe((res: any) => {
      let user = JSON.stringify(res)
      localStorage.setItem('userData', user)
      this.data = this.userDataService.getUserData()
      this.readonly = true
    });
  }

  getCep(cep: string): void{
    let newCep = cep.replace('-', '')
    this.cepService.getCep(newCep).subscribe(res => {
      this.data.endereco = res
    })
  }

}
