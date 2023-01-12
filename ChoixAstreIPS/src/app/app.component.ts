import { Component } from '@angular/core';
import data from "../assets/indicateurs.json";
import {Indicator, Weight, getDefaultWeights} from "../Indicator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly students: Indicator[] = data.map(e => new Indicator(e));
  public selectedStudent!: Indicator | null;
  public weights: Weight[] = getDefaultWeights();

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

  public selectStudent(id: string) {
    this.selectedStudent = this.students.find((s) => s.id === id)!;
  }
}
