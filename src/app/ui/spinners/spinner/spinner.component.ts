import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { AbstractSpinner } from 'src/app/ui/spinners/abstract-spinner';

@Component({
	selector: 'gui-spinner',
	templateUrl: 'spinner.component.html',
	styleUrls: [
		'spinner.scss',
		'./themes/spinner.dark.scss',
		'./themes/spinner.material.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent extends AbstractSpinner implements OnInit {

	@Input()
	color: string;

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}

	ngOnInit() {
		super.ngOnInit();
	}
}
