import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, OnDestroy, Type } from '@angular/core';

import { DialogComponent } from './dialog.component';

@Injectable()
export class DialogService implements OnDestroy {

	dialogRef: ComponentRef<any> = null;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private applicationRef: ApplicationRef,
		private injector: Injector) {
	}

	ngOnDestroy() {
		this.removeDialog();
	}

	open(component: Type<any>): void {
		if (!this.dialogRef) {
			this.appendDialogToBody(component);
		}
	}

	close(): void {
		this.removeDialog();
	}

	private appendDialogToBody(component: any): void {
		const componentRef = this.componentFactoryResolver
								 .resolveComponentFactory(DialogComponent)
								 .create(this.injector);

		componentRef.instance.dialogNestedComponent = component;
		componentRef.changeDetectorRef.detectChanges();

		this.applicationRef.attachView(componentRef.hostView);

		const domDialogElement = (componentRef.hostView as EmbeddedViewRef<any>)
			.rootNodes[0] as HTMLElement;

		document.body.appendChild(domDialogElement);

		this.dialogRef = componentRef;
	}

	private removeDialog(): void {
		this.applicationRef.detachView(this.dialogRef.hostView);
		this.dialogRef.destroy();
		this.dialogRef = null;
	}

}
