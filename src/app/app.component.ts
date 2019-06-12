import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

import { SpinnerMode } from 'util/fabric/ui/spinners/progress-spinner/spinner-mode';
import { Placement } from '../../util/fabric/ui/form/modals/dropdown/placement';

@Component({
  selector: 'app-component',
  templateUrl: `app.component.html`,
  styleUrls: ['style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @ViewChild('ngModel', { read: NgModel })
  ngModel: NgModel;

  spinnerMode: SpinnerMode = SpinnerMode.Spin;
  placementRight: Placement = Placement.Right;
  placementLeft: Placement = Placement.Left;

  constructor(private renderer: Renderer2,
              private el: ElementRef) {
  }

  changeTheme(theme: string): void {

    switch (theme) {

      case 'Material':

        this.setTheme('gui-material');
        break;

      case 'Dark':

        this.setTheme('gui-dark');
        this.renderer.addClass(document.body, 'gui-dark');
        break;

      default:
        this.removeThemes();
        break;
    }
  }

  private setTheme(name: string): void {
    this.removeThemes();
    this.renderer.addClass(this.el.nativeElement, name);
  }

  private removeThemes(): void {
    this.renderer.removeClass(this.el.nativeElement, 'gui-material');
    this.renderer.removeClass(this.el.nativeElement, 'gui-dark');
    this.renderer.removeClass(document.body, 'gui-dark');
  }
}
