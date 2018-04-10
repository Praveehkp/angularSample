import { Component } from '@angular/core';
import { DataService } from './data.services';

@Component({
  selector: 'app-root',
  providers: [ DataService ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app working!';
  users1:any;
  constructor(private fileSer:DataService){}
  ngOnInit() {
    this.fileSer.get_users()
      .subscribe(data => this.users1= data);
     
  }
}






