import { Component } from '@angular/core';
import { DialogService } from '../../ui/form/modals/dialog/dialog.service';


@Component({
	template: `
		<div style="padding: 24px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi eaque est explicabo facilis inventore quod rem temporibus velit vero. Blanditiis, magnam voluptates. Atque eius in iure nostrum, odit voluptas. Asperiores error illum itaque nostrum, pariatur repellendus velit voluptatibus. Consectetur, corporis debitis distinctio doloremque doloribus ducimus eaque inventore libero maxime minima molestias nemo, non nostrum perspiciatis rem sint temporibus, vero?</div>
	`
})
export class DialogExample {

	constructor(private dialogService: DialogService) {

	}

	closeDialog(): void {
		this.dialogService.close();
	}
}
