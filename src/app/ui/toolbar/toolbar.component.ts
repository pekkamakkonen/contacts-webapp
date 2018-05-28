import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarService} from './toolbar.service';
import {ToolbarOptions} from './toolbar-options';
import {Location} from '@angular/common';

@Component({
  selector: 'cw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {

    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });

  }

  onMenuClick() {
    this.MenuClick.emit();
  }

  onNavigateBack() {
    this.location.back();
  }

}
