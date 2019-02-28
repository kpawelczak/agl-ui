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

    getClass(color: string) {

        switch (this.color) {

            case "Primary": return "Primary";
            case "Secondary": return "Secondary";

        }
        console.log(this.color);
    }

}
