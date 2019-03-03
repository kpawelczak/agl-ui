import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'gui-chip',
    templateUrl: './chip.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./chip.scss'],
    host: {
        '[class.gui-chip]': 'true'
    }
})

export class ChipComponent {

    @HostBinding('class.Primary') @Input() public Primary: boolean;
    @HostBinding('class.Secondary') @Input() public Secondary: boolean;

}
