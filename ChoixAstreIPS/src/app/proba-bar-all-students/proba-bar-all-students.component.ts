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

  ngAfterContentInit(): void {
    this.calculateAmountIPSandASTRE();
  }

  public calculateAmountIPSandASTRE(): void {
    let tempIpsAmount = 0;
    let tempAstreAmount = 0;
    this.studentsIndicators.forEach((studentIndication: Indicator) => {
      if(studentIndication.computeProbability(this.indicatorsWeights) > 0) {
        tempIpsAmount++;
      } else if (studentIndication.computeProbability(this.indicatorsWeights) < 0) {
        tempAstreAmount++;
      }
    });
    this.ipsAmount = tempIpsAmount;
    this.astreAmount = tempAstreAmount;
    console.log(tempAstreAmount, tempIpsAmount)
  }

}
