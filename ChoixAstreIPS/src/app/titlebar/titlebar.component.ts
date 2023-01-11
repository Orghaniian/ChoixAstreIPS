import {Component, Input } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {
  @Input() name?: string;

  public appWindow = appWindow;

  public isMaximized = false;

  private unlisten: Function = () => {};

  ngOnInit() {
    appWindow.listen("tauri://resize", (event) => {
      appWindow.isMaximized().then((b) => this.isMaximized = b);
    }).then((r) => this.unlisten = r);
  }

  ngOnDestroy() {
    this.unlisten();
  }
}
