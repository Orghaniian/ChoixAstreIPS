import { Component } from '@angular/core';
import data from "../assets/indicateurs.json";
import {Indicator, Weight, defaultWeights} from "../Indicator";
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sliderOptions: Options = {
    floor: 0,
    ceil: 1,
    step: 0.1,
    showTicksValues: false,
    showTicks: false
  }

  readonly students: Indicator[] = data.map(e => new Indicator(e));
  public selectedStudent: Indicator | null = this.students[0];
  public weights: Weight[] = defaultWeights;

  public weightValueChanged = this.calculateBubblePosition;
  public selectedStudentChanged = this.calculateBubblePosition;

  public calculateBubblePosition(): void {
    if (this.selectedStudent) {
      let score = this.selectedStudent.computeProbability(this.weights);
      let bubble_element = document.getElementById('bubble_indication_block');
      if (bubble_element) {
        bubble_element.style.marginLeft = this.pourcentageToMarginLeft(score);
      }
    }

  }

  public pourcentageToMarginLeft(_score: number): string {
    return `${(_score+1)*50}%`;
  }

}
