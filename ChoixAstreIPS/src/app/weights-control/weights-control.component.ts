import {Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {getDefaultWeights, Indicator, Weight} from "../../Indicator";
import {Options} from "@angular-slider/ngx-slider";
import {clone} from "../../ArrayUtils";
import WeightsPreset from "./WeightsPreset";

@Component({
  selector: 'app-weights-control',
  templateUrl: './weights-control.component.html',
  styleUrls: ['./weights-control.component.scss']
})
export class WeightsControlComponent {
  private readonly weightsPresetsKey = "weightsPresets";

  @Input() weights: Weight[] = [];
  @Input() students!: Indicator[];
  sliderOptions: Options = {
    floor: 0,
    ceil: 1,
    step: 0.1,
    showTicksValues: false,
    showTicks: false
  }

  public savedWeights: WeightsPreset[] = [];

  ngOnInit() {
    const json = localStorage.getItem(this.weightsPresetsKey);
    if (json) this.savedWeights = JSON.parse(json);
  }

  public resetWeights() {
    const defaultWeights = getDefaultWeights();
    this.weights.forEach((weight, index) => {
      weight.value = defaultWeights[index].value;
    })
  }

  // ---------- PRESETS ------------

  @ViewChildren("presets") presets!: QueryList<ElementRef>;

  public editingPreset: number | null = null;

  public savePresetsToStorage() {
    localStorage.setItem(this.weightsPresetsKey, JSON.stringify(this.savedWeights));
  }

  public saveWeights() {
    this.savedWeights.push({
      name: `Poids ${this.savedWeights.length}`,
      weights: clone(this.weights)
    });

    this.savePresetsToStorage();
  }

  applyPreset(i: number) {
    this.weights.forEach((weight, index) => {
      weight.value = this.savedWeights[i].weights[index].value;
    })
  }

  delete(index: number) {
    this.savedWeights.splice(index, 1);
    this.savePresetsToStorage();
  }

  edit(index: number | null) {
    this.editingPreset = index;
    if(index != null) {
      setTimeout( () => {
        this.presets.get(index)!.nativeElement.querySelector("input").focus();
      }, 0)
    }
  }

  changePresetName(newName: string) {
    this.savedWeights[this.editingPreset!].name = newName.length > 0 ? newName : `Poids ${this.editingPreset}`;
    this.savePresetsToStorage();
  }

  isPresetSelected(index: number) {
    let result = true;
    this.weights.forEach((weight, i) => {
      if(weight.value !== this.savedWeights[index].weights[i].value) {
        result = false;
      }
    })
    return result;
  }
}
