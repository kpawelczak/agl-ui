import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'gui-tab-item',
	templateUrl: `tab-item.component.html`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class TabItemComponent {
	@Input()
	tab: string;
}
