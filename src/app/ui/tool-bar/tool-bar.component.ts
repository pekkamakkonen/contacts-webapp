import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarService} from './toolbar.service';
import {ToolbarOptions} from './toolbar-options';
import {Location, Location} from '@angular/common';

@Component({
  selector: 'cw-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.toolbarOptions.subscribe((options: ToolbarOptions) => { this.options = options
  });
  }

  onmenuClick() {
    this.MenuClick.emit();
  }

  onNavigateBack() {
    this.location.back();
  }

}
