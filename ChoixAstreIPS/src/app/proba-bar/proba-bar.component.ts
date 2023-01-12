import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Indicator, Weight } from 'src/Indicator';

@Component({
  selector: 'app-proba-bar',
  templateUrl: './proba-bar.component.html',
  styleUrls: ['./proba-bar.component.scss']
})
export class ProbaBarComponent {

  @Input() selectedStudent!: Indicator;
  @Input() weights: Weight[] = [];
  @Output() init = new EventEmitter();

  ngAfterViewChecked() {
    this.init.emit();
  }


  public caption(): string {
    const proba = this.selectedStudent.computeProbability(this.weights);

    if (proba == 0) return `Nous ne sommes pas en mesure de déterminer l'avenir de l'élève <span style="font-weight:bold;">${this.selectedStudent.id}</span>`;

    const option = proba > 0 ? `<span class="ips">IPS</span>` : `<span class="astre">ASTRE</span>`

    return `L’élève <span style="font-weight:bold;">${this.selectedStudent.id}</span> deviendra un-e élève ${option}`
  }

}
