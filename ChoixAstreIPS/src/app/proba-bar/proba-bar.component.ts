import { Component, Input } from '@angular/core';
import { Indicator, Weight } from 'src/Indicator';

@Component({
  selector: 'app-proba-bar',
  templateUrl: './proba-bar.component.html',
  styleUrls: ['./proba-bar.component.css']
})
export class ProbaBarComponent {

  @Input() selectedStudent?: Indicator;
  @Input() weights: Weight[] = [];

  
  public isIPS(): boolean {
    if(this.selectedStudent == null) return false;

    return this.selectedStudent.computeProbability(this.weights) > 0;
  }

}
