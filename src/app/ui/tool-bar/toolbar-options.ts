import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
  title: string;
  actions: ToolbarAction[];

  constructor(title: string, actions: ToolbarAction[]) {
    this.title = title;
    this.actions = actions;
  }
}


