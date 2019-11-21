import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

@NgModule({

})
export class DashBoardComponent implements OnInit {
  gaugeType = "semi";
  currentValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  constructor() { }

  ngOnInit() {
    
  }

}
