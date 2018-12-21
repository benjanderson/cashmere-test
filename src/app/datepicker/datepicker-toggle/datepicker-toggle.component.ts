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
    OnDestroy,
    Directive,
    AfterContentInit,
    OnChanges,
    ContentChild,
    Attribute,
    SimpleChanges
} from '@angular/core';
import { PopoverDirective, ButtonComponent } from '@healthcatalyst/cashmere';
import { merge, Subscription, of as observableOf } from 'rxjs';
import { coerceBooleanProperty } from '../utils/boolean-property';
import { MatDatepickerIntl } from '../datepicker-intl';
import { MatDatepicker } from '../hc-datepicker.component';

/** Can be used to override the icon of a `matDatepickerToggle`. */
@Directive({
    selector: '[matDatepickerToggleIcon]'
})
export class MatDatepickerToggleIcon {}

@Component({
    // moduleId: module.id,
    selector: 'mat-datepicker-toggle',
    templateUrl: './datepicker-toggle.component.html',
    styleUrls: ['./datepicker-toggle.component.scss'],
    host: {
        class: 'mat-datepicker-toggle',
        // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
        // consumer may have provided, while still being able to receive focus.
        '[attr.tabindex]': '-1',
        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
        '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
        '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
        '(focus)': '_button.focus()'
    },
    exportAs: 'matDatepickerToggle',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatDatepickerToggle implements AfterContentInit, OnChanges, OnDestroy {
    private _stateChanges = Subscription.EMPTY;

    /** Datepicker instance that the button will toggle. */
    @Input('for') datepicker: MatDatepicker;

    /** Tabindex for the toggle. */
    @Input() tabIndex: number | null;

    /** Whether the toggle button is disabled. */
    @Input()
    get disabled(): boolean {
        return this._disabled === undefined ? this.datepicker.disabled : !!this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value);
    }
    private _disabled: boolean;

    /** Custom icon set by the consumer. */
    @ContentChild(MatDatepickerToggleIcon) _customIcon: MatDatepickerToggleIcon;

    /** Underlying button element. */
    @ViewChild('button') _button: ButtonComponent;

    constructor(
        public _intl: MatDatepickerIntl,
        private _changeDetectorRef: ChangeDetectorRef,
        @Attribute('tabindex') defaultTabIndex: string
    ) {
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.datepicker) {
            this._watchStateChanges();
        }
    }

    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }

    ngAfterContentInit() {
        this._watchStateChanges();
    }

    _open(event: Event): void {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    }

    private _watchStateChanges() {
        const datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : observableOf();
        const inputDisabled =
            this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput._disabledChange : observableOf();
        const datepickerToggled = this.datepicker ? merge(this.datepicker.openedStream, this.datepicker.closedStream) : observableOf();

        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(() =>
            this._changeDetectorRef.markForCheck()
        );
    }
}
