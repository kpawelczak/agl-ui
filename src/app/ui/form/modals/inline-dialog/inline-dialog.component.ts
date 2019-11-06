import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ComponentFactoryResolver,
	ElementRef,
	forwardRef,
	Inject,
	OnInit,
	Type,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { InlineDialogService } from './inline-dialog.service';
import { Subscription } from 'rxjs';


@Component({
	templateUrl: 'inline-dialog.component.html',
	styleUrls:['./inline-dialog.scss']
})
export class InlineDialogComponent implements OnInit, AfterViewInit {

	@ViewChild('container', { read: ViewContainerRef })
	container: ViewContainerRef;

	inlineDialogNestedComponent: Type<any>;

	dialogTopAttribute: number;
	dialogLeftAttribute: number;

	private inlineDialogCordsSubscription: Subscription;

	private readonly spaceBetweenElementAndInlineDialog: number = 8;

	constructor(private componentFactoryResolver: ComponentFactoryResolver,
				private changeDetectorRef: ChangeDetectorRef,
				@Inject(forwardRef(() => InlineDialogService)) private inlineDialogService: InlineDialogService,
				private elementRef: ElementRef) {
	}

	ngOnInit() {
		this.inlineDialogCordsSubscription =
			this.inlineDialogService.observeInlineDialogCords()
				.subscribe((inlineDialogCords) => {
					this.dialogTopAttribute = inlineDialogCords.getVerticalPosition() + this.spaceBetweenElementAndInlineDialog;
					this.dialogLeftAttribute = inlineDialogCords.getHorizontalPosition();
				});
	}

	ngOnDestroy() {
		if (this.inlineDialogCordsSubscription) {
			this.inlineDialogCordsSubscription.unsubscribe();
		}
	}

	ngAfterViewInit() {
		this.createNestedComponent(this.inlineDialogNestedComponent);
		this.changeDetectorRef.detectChanges();
	}

	clickOutside(event: any): void {
		if (this.isContainerClicked(event)) {
			this.inlineDialogService.close();
		}
	}

	private isContainerClicked(event: any): boolean {
		return !this.elementRef.nativeElement.contains(event.target);
	}

	private createNestedComponent(component: Type<any>): void {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

		this.container.createComponent(componentFactory);
	}
}
