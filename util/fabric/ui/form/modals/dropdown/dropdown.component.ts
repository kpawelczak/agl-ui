import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { GeometryService } from 'util/fabric/ui/form/modals/geometry.service';
import { Placement } from 'util/fabric/ui/form/modals/dropdown/placement';
import { Subscription } from 'rxjs';
import { Geometry } from 'util/fabric/ui/form/modals/geometry';


@Component({
  selector: 'gui-dropdown',
  templateUrl: `dropdown.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'dropdown.scss',
    './themes/dropdown.dark.scss',
    './themes/dropdown.material.scss'],
  host: {
    '[class.gui-dropdown]': 'true'
  },
  providers: [GeometryService]
})
export class FabricDropdownComponent implements OnChanges, OnInit {

  @ViewChild('dropdownMenu')
  dropdownMenuRef: ElementRef;

  @ViewChild('container')
  containerRef: ElementRef;

  @HostListener('window:resize')
  onResize() {
    this.windowSize = window.innerHeight;
  }

  @Input()
  disabled: boolean = false;

  @Input()
  dropdownText: string = 'Dropdown';

  @Input()
  arrow: boolean = true;

  @Input()
  placement: Placement;

  isArrowEnabled: boolean = this.arrow;

  containerWidth: number;
  containerHeight: number;
  windowSize: number;

  openHorizontal: number;
  openVertical: number;

  private canOpenDownward: boolean;
  private canOpenUpward: boolean;
  private open: boolean = false;

  private subscription: Subscription;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              private geometryService: GeometryService) {
    this.onResize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.placement) {
      this.changePlacement();
    }
  }

  ngOnInit() {
    this.observeGeometry();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  tryToOpen(event: any): void {

    if (this.isContainerDisabled(event)) {
      event.stopPropagation();
    } else {
      this.openMenu(!this.open);
      this.changeDetectorRef.detectChanges();
    }
  }

  clickOutside(event: any): void {
    if (this.isContainerClicked(event)) {
      this.openMenu(false);
    }
  }

  private openMenu(opened: boolean): void {
    this.open = opened;

    if (this.open) {
      this.showItems();
    } else {
      this.hideItems();
    }
  }

  private showItems(): void {
    this.addClass(this.elementRef.nativeElement, 'gui-menu-opened');
    this.geometryService.changeGeometry(this.containerRef, this.dropdownMenuRef, this.windowSize);

    if (this.canOpenDownward || !this.canOpenUpward) {
      this.openVertical = this.containerHeight;
    } else {
      this.openVertical = -(this.containerHeight * 2);
    }

    if (this.placement === Placement.Right) {
      this.openVertical = 0;
      this.openHorizontal = this.containerWidth;
    }

    if (this.placement === Placement.Left) {
      this.openVertical = 0;
      this.openHorizontal = -(this.containerWidth + 1);
    }
  }

  private observeGeometry() {
    this.subscription =
      this.geometryService.watchGeometry()
          .subscribe(
            (geometry: Geometry) => {
              this.containerHeight = geometry.getContainerHeight();
              this.containerWidth = geometry.getContainerWidth();
              this.canOpenUpward = geometry.canOpenUpward();
              this.canOpenDownward = geometry.canOpenDownward();
            });
  }

  private changePlacement() {
    if (this.placement === Placement.Right) {
      this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
      this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
    } else {
      this.removeClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-right');
      this.addClass(this.dropdownMenuRef.nativeElement, 'gui-dropdown-left');
    }
  }

  private hideItems(): void {
    const itemsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-menu-opened');

    if (itemsElHasOpenClass) {
      this.removeClass(this.elementRef.nativeElement, 'gui-menu-opened');
    }
  }

  private isContainerClicked(event: any): boolean {
    return !this.elementRef.nativeElement.contains(event.target);
  }

  private isContainerDisabled(event: any): boolean {
    return event.target.classList.contains('gui-disabled');
  }

  private addClass(element: ElementRef, name: string) {
    this.renderer.addClass(element, name);
  }

  private removeClass(element: ElementRef, name: string) {
    this.renderer.removeClass(element, name);
  }
}
