import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'gui-badge',
    templateUrl: './badge.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./badge.scss'],
})
export class BadgeComponent {

    @Input() public color: string;

    getClass(color: string) {

        switch (this.color) {

            case "Primary": return "BadgePrimary";
            case "Secondary": return "BadgeSecondary";

        }
    }
}
