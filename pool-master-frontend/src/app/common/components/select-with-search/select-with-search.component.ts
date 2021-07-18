import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit, OnDestroy, HostBinding, Optional, Self, AfterViewInit, ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { Option } from '../../classes/option';

@Component({
  host: {
    '(focusout)': 'onTouched()'
  },
  selector: 'pm-select-with-search',
  templateUrl: './select-with-search.component.html',
  styleUrls: ['./select-with-search.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: SelectWithSearchComponent}]
})
export class SelectWithSearchComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor, MatFormFieldControl<number> {
  static nextId = 0;
  private _disabled: boolean = false;
  private _focused: boolean = false;
  private _placeholder: string = '';
  private _required: boolean = false;
  private destroy: Subject<void> = new Subject();

  @Input() options: Option[];

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input() 
  get value(): number | null {
    return this.ctl.value;
  }
  set value(val: number | null) {
    this.ctl.setValue(val);
    this.stateChanges.next();
  }

  get empty(): boolean {
    return (this.ctl.value);
  }

  get errorState(): boolean {
    return (this.ngControl.control != null) 
    ? !!this.ngControl.control
    : false;
  }  

  get focused(): boolean {
    return this._focused;
  }
  set focused(value: boolean) {
    this._focused = value;
    this.stateChanges.next();
  }

  @HostBinding('attr.aria-describedby')
  describedBy: string = '';
  
  @HostBinding()
  id = `select-with-search-${SelectWithSearchComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  stateChanges = new Subject<void>();
  sortedOptions: Option[];
  controlType: string = 'search-select';

  ctl = new FormControl(0);
  searchBox = new FormControl('');

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>
  ) { 
    if(ngControl) {
      this.ngControl.valueAccessor = this;
      ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if(this.options && this.options.length) {
      this.sortedOptions = this.options.sort((a,b) => a.name != null ? a.name.localeCompare(b.name) : -1);
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
    this.stateChanges.complete();
  }

  ngAfterViewInit(): void {
   this._focusMonitor.monitor(this._elementRef.nativeElement, true)
   .subscribe(focusOrigin => {
     this.focused = !!focusOrigin;
   });
  }

  onKeyUp = (val: string) => {
    this.sortedOptions = this.sortedOptions.filter(a => a.name.includes(val));
  }

  onTouched(): void {}

  registerOnChange(onChange: (value: number | null) => void): void {
    this.ctl.valueChanges.pipe(takeUntil(this.destroy)).subscribe(onChange);
  }

  registerOnTouched(onTouched: () => void): void{
    this.onTouched = onTouched;
  }

  setDescribedByIds(ids: string[]) : void {
    this.describedBy = ids.join(' ');
  }

  setDisabledState(shouldDisable: boolean): void {
    if(shouldDisable) {
      this.ctl.disable();
    } else {
      this.ctl.enable();
    }
    this.disabled = shouldDisable;
  }

  writeValue(value: number | null): void {
    this.ctl.setValue(value, { emitEvent: false});
  }

  onContainerClick(event: MouseEvent): void {
    if((event.target as Element).tagName.toLowerCase() !== 'input') {
      this._focusMonitor.focusVia(this._elementRef.nativeElement, 'mouse');
    }
  }
}
