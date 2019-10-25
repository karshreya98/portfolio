import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {SharedModule} from "../../shared-module";
import {ProjectsComponent} from "../../projects/projects/projects.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
