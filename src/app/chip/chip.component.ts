import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'gui-chip',
    templateUrl: './chip.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./chip.scss'],
})
export class ChipComponent {

    @Input() public color: string;

    getClass() {

        switch (this.color) {

            case "Primary": return "ChipPrimary";
            case "Secondary": return "ChipSecondary";

        }
    }

}
