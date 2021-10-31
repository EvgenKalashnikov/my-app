import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor() {
  }

  ngOnInit(): void {
    this.user = {
      id: '1',
      firstname: 'Riccardo',
      lastname: 'Abilio'
    };
  }

}
