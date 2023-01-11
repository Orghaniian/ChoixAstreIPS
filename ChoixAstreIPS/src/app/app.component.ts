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

  ngOnInit(): void {
  }

  ngAfterInit(): void {
    this.calculateBubblePosition();
  }

  public calculateBubblePosition(): void {
    if (this.selectedStudent) {
      let score = this.selectedStudent.computeProbability(this.weights);
      // Calcul schlag
      // -1 -> margin-left 10%
      // 1 -> margin-left 70%
      let bubble_element = document.getElementById('bubble_indication_block');
      if (bubble_element) {
        bubble_element.style.marginLeft = this.pourcentageToMarginLeft(score);
      }
    }

  }

  public pourcentageToMarginLeft(_score: number): string {
    return '30%';
  }

  public isIPS(): boolean {
    if(this.selectedStudent == null) return false;

    return this.selectedStudent.computeProbability(this.weights) > 0;
  }
}
