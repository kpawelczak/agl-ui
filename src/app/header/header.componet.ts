import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<div class="header">
			<h1>SIMPLE UI</h1>
			<a gui-button id="link" [link]="true" href="https://github.com/kpawelczak/simple-ui">Github</a>
		</div>
	`
})
export class AppHeaderComponent {
}
