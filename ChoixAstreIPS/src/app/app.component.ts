import { Component } from '@angular/core';
import data from "../assets/indicateurs.json";
import { Indicator, defaultWeights } from "../Indicator";
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

  public students: Indicator[] = data.map(e => new Indicator(e));
  public selectedStudent: Indicator | null = this.students[0];
  readonly  weights: Map<string, number> = defaultWeights;

  readonly  weightTitles: Map<string, string> = new Map<string, string>([
    ["assos", "Participation dans les associations"],
    ["devices", "Intêret pour l'utilisation de de certaines machines"],
    ["highschoolSubjects", "Attrait pour certaines matières au lycée"],
    ["hobbies", "Hobbies"],
    ["oS", "Système d'exploitation de prédilection"],
    ["paradigm", "Paradigme de programmation préféré"],
    ["previousCursus", "Formation avant le cycle ingénieur"],
    ["s5Subjects", "Attrait pour certains cours du S5"],
    ["softwaresUsage", "Habitude d'utilisation de certains logiciels"],
    ["technos", "Intérêt pour certains technologies"]
  ]);
}
