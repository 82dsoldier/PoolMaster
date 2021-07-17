import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../../classes/option';

@Component({
  selector: 'pm-select-with-search',
  templateUrl: './select-with-search.component.html',
  styleUrls: ['./select-with-search.component.scss']
})
export class SelectWithSearchComponent implements OnInit {
  @Input() public label: string;
  @Input() public placeholder: string = "Search...";
  @Input() public options: Option[];

  sortedOptions: Option[];

  constructor() { }

  ngOnInit(): void {
    if(this.options && this.options.length) {
      this.sortedOptions = this.options.sort((a,b) => a.name != null ? a.name.localeCompare(b.name) : -1);
    }
  }

  onKeyUp = (val: string) => {
    this.sortedOptions = this.sortedOptions.filter(a => a.name.includes(val));
  }
}
