import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'gui-badge',
    templateUrl: './badge.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./badge.scss'],
    host: {
        '[class.gui-badge]': 'true',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary'
    }
})

export class BadgeComponent {

    @Input() public primary: boolean;
    @Input() public secondary: boolean;

}
