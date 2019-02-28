import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'button[gui-button],gui-button',
    templateUrl: `button.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./button.scss'],
    host: {
        '[class.gui-button]': 'true'
    }
})
export class FabricButtonComponent {

    @Input() public color: string;

    getClass(color: string) {

        switch (this.color) {

            case "Primary": return "Primary";
            case "Secondary": return "button.Secondary";

        }
    }

}
