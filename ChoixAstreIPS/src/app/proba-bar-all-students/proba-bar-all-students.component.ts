import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Indicator, Weight } from 'src/Indicator';

@Component({
  selector: 'app-proba-bar-all-students',
  templateUrl: './proba-bar-all-students.component.html',
  styleUrls: ['./proba-bar-all-students.component.scss']
})
export class ProbaBarAllStudentsComponent {
  @Output() selectStudent: EventEmitter<string> = new EventEmitter()
  @Input() studentsIndicators!: Indicator[];
  @Input() indicatorsWeights!: Weight[];
  public ipsAmount!: number;
  public astreAmount!: number;

  @ViewChild("gradientBar") gradientBar!: ElementRef;

  private ipsColor: string = "";
  private astreColor: string = "";

  ngOnInit() {
    const css = getComputedStyle(document.documentElement)
    this.ipsColor = css.getPropertyValue('--violet-color');
    this.astreColor = css.getPropertyValue("--blue-color");
  }

  ngAfterViewChecked(): void {
    this.updateDots();
  }

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

  public updateDots() {
    if(!this.gradientBar) return;

    for (const dot of (this.gradientBar.nativeElement as HTMLElement).children) {
      const proba = this.studentsIndicators
          .find((student) => student.id === dot.id)!
          .computeProbability(this.indicatorsWeights);
      const style = (dot as HTMLElement).style;
      style.left = (proba + 1) * 50 + "%";
      style.backgroundColor = proba == 0 ? "white" : proba > 0 ? this.ipsColor : this.astreColor;
    }
  }
}
