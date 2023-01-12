import {Component, EventEmitter, Input, Output} from '@angular/core';
import {getDefaultWeights, Weight} from "../../Indicator";
import {Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-weights-control',
  templateUrl: './weights-control.component.html',
  styleUrls: ['./weights-control.component.scss']
})
export class WeightsControlComponent {

  @Input() weights: Weight[] = [];
  sliderOptions: Options = {
    floor: 0,
    ceil: 1,
    step: 0.1,
    showTicksValues: false,
    showTicks: false
  }

  public resetWeights() {
    const defaultWeights = getDefaultWeights();
    this.weights.forEach((weight, index) => {
      weight.value = defaultWeights[index].value;
    })
  }
}
