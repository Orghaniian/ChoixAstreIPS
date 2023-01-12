import { Component, Input } from '@angular/core';
import { Indicator, Weight } from 'src/Indicator';

@Component({
  selector: 'app-proba-bar-all-students',
  templateUrl: './proba-bar-all-students.component.html',
  styleUrls: ['./proba-bar-all-students.component.scss']
})
export class ProbaBarAllStudentsComponent {

  @Input() studentsIndicators!: Indicator[];
  @Input() indicatorsWeights!: Weight[];
  public ipsAmount!: number;
  public astreAmount!: number;

  ngAfterContentChecked(): void {
    this.calculateAmountIPSandASTRE(this.indicatorsWeights);
  }

  public calculateAmountIPSandASTRE(weights: Weight[]): void {
    let tempIpsAmount = 0;
    let tempAstreAmount = 0;
    this.studentsIndicators.forEach((studentIndication: Indicator) => {
      if(studentIndication.computeProbability(weights) > 0) {
        tempIpsAmount++;
      } else if (studentIndication.computeProbability(weights) < 0) {
        tempAstreAmount++;
      }
    });
    this.ipsAmount = tempIpsAmount;
    this.astreAmount = tempAstreAmount;
  }

}
