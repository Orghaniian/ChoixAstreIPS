import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Indicator, Weight } from 'src/Indicator';

@Component({
  selector: 'app-proba-bar',
  templateUrl: './proba-bar.component.html',
  styleUrls: ['./proba-bar.component.scss']
})
export class ProbaBarComponent {

  @Input() selectedStudent?: Indicator;
  @Input() weights: Weight[] = [];
  @Output() init = new EventEmitter();

  ngAfterViewChecked() {
    this.init.emit();
  }


  public isIPS(): boolean {
    if (this.selectedStudent == null) return false;

    return this.selectedStudent.computeProbability(this.weights) > 0;
  }

}
