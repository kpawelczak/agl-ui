import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ComponentFactoryResolver,
	forwardRef,
	Inject,
	Type,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.scss']
})
export class DialogComponent implements AfterViewInit {

	@ViewChild('container', { read: ViewContainerRef })
	container: ViewContainerRef;

	dialogNestedComponent: Type<any>;

	constructor(private componentFactoryResolver: ComponentFactoryResolver,
				private changeDetectorRef: ChangeDetectorRef,
				@Inject(forwardRef(() => DialogService)) private  dialogService: DialogService) {
	}

	ngAfterViewInit() {
		this.createNestedComponent(this.dialogNestedComponent);
		this.changeDetectorRef.detectChanges();
	}

	closeDialog() {
		this.dialogService.close();
	}

	private createNestedComponent(component: Type<any>): void {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

		this.container.createComponent(componentFactory);
	}
}
