import {
    Component,
    OnInit,
    Input,
    HostBinding,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ViewContainerRef,
    Renderer2,
    ViewChild,
    OnDestroy
} from '@angular/core';
import { HcDatepickerComponent } from '../hc-datepicker.component';
import { PopoverDirective } from '@healthcatalyst/cashmere';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'hc-datepicker-toggle',
    templateUrl: './datepicker-toggle.component.html',
    styleUrls: ['./datepicker-toggle.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerToggleComponent implements OnInit, OnDestroy {
    @Input() for: HcDatepickerComponent;
    @HostBinding('attr.tabindex') tabIndex: number | null = -1;
    @HostBinding('style.cursor') cursor = 'pointer';
    _color = '#a1a1a1';
    private unsubscribe: Subject<void> = new Subject();
    @ViewChild(PopoverDirective) popoverDirective: PopoverDirective;
    ngOnInit(): void {
        this.popoverDirective.popperOnShown.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
            this._color = '#0089C6';
        });

        this.popoverDirective.popperOnHidden.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
            this._color = '#a1a1a1';
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
