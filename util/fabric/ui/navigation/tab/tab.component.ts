import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gui-tab',
  templateUrl: `tab.component.html`,
  styleUrls: [
    'tab.scss',
    './themes/tab.dark.scss',
    './themes/tab.material.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.gui-tab]': 'true'
  }
})
export class FabricTabComponent {

  @ViewChild('tab')
  navTabRef: ElementRef;

  @ViewChild('tabitem')
  navTabItemRef: ElementRef;

  @Input()
  menu: Array<string>;

  @Input()
  active: string;

  private readonly ACTIVE_TAB_CLASS_NAME = 'gui-active';

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.toggleTab(this.active);
  }

  toggleTab(tab: string): void {
    this.removeActive();
    this.setActive(tab);
  }

  private setActive(tab: string): void {
    const navMenuTabEl = this.navTabRef.nativeElement.querySelector('[data-tab="' + tab, '"]'),
      navTabItemEl = this.navTabItemRef.nativeElement.querySelector('[data-tab="' + tab, '"]');
    this.addClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
    this.addClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
  }

  private removeActive(): void {
    const navMenuTabEl = this.navTabRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME),
      navTabItemEl = this.navTabItemRef.nativeElement.querySelector('.' + this.ACTIVE_TAB_CLASS_NAME);
    if (navMenuTabEl) {
      this.removeClass(navMenuTabEl, this.ACTIVE_TAB_CLASS_NAME);
    }
    if (navTabItemEl) {
      this.removeClass(navTabItemEl, this.ACTIVE_TAB_CLASS_NAME);
    }
  }

  private addClass(element: ElementRef, name: string) {
    this.renderer.addClass(element, name);
  }

  private removeClass(element: ElementRef, name: string) {
    this.renderer.removeClass(element, name);
  }
}
