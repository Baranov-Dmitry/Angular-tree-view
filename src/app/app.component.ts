import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tree-View';
  userName = 'Dmitry';

  ngOnInit(): void {
    console.log('hi');
  }

}
