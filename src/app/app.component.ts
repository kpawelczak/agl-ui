import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { HighlightService } from './prism/highlight.service';
import { DialogService } from './ui/form/modals/dialog/dialog.service';
import { InlineDialogService } from './ui/form/modals/inline-dialog/inline-dialog.service';

import { SpinnerMode } from 'src/app/ui/spinners/progress-spinner/spinner-mode';
import { Placement } from './ui/form/modals/dropdown/placement';

import { buttonsCode } from './code-examples/buttons.code';
import { navTabCode } from './code-examples/navtab.code';

import { InlineDialogExample } from './examples/dialog/inline-dialog-example.component';
import { DialogExample } from './examples/dialog/dialog-example.component';

@Component({
	selector: 'app-component',
	templateUrl: `app.component.html`,
	styleUrls: ['style.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

	@ViewChild('inlineDialog')
	inlineDialogRef: ElementRef;

	spinnerMode: SpinnerMode = SpinnerMode.Spin;
	placementRight: Placement = Placement.Right;
	placementLeft: Placement = Placement.Left;

	buttonCode = buttonsCode;
	navTabCode = navTabCode;

	constructor(private highlightService: HighlightService,
				private renderer: Renderer2,
				private el: ElementRef,
				private dialogService: DialogService,
				private inlineDialogService: InlineDialogService) {
	}

	ngAfterViewInit() {
		this.highlightService.highlightAll();
	}

	openInlineDialog() {
		const inlineDialogEl = this.inlineDialogRef;
		this.inlineDialogService.open(inlineDialogEl, InlineDialogExample);
	}

	openDialog(): void {
		this.dialogService.open(DialogExample);
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
