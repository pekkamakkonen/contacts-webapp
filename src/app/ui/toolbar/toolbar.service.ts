import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ToolbarOptions} from './toolbar-options';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  toolbarOptions: BehaviorSubject<ToolbarOptions>;

  constructor() {
    this.toolbarOptions = new BehaviorSubject<ToolbarOptions>(
      new ToolbarOptions(false, 'Contacts Application', []));
  }

  getToolbarOptions(): Observable<ToolbarOptions> {
    return this.toolbarOptions.asObservable();
  }

  setToolbarOptions(options: ToolbarOptions): void {
    this.toolbarOptions.next(options);
  }
}
