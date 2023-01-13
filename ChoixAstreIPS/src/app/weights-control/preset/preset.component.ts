import {Component, EventEmitter, Input, Output} from '@angular/core';
import WeightsPreset from "../WeightsPreset";

@Component({
  selector: 'weights-control-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.scss']
})
export class PresetComponent {
  @Input() preset!: WeightsPreset;

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() submit = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Output() nameChanged = new EventEmitter<string>();

  @Input() isEditing: boolean = false;
  @Input() isSelected: boolean = false;

  changePresetName(event: Event) {
    this.nameChanged.emit((event.target as HTMLInputElement).value)
  }
}
