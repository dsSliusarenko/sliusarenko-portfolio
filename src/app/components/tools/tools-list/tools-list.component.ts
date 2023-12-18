import {Component, Input, OnInit} from '@angular/core';
import {ListType, TOOLS, ToolsList} from "../tools";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'sds-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {
  protected readonly environment = environment;

  @Input() listType!: ListType;

  toolsList!: ToolsList;

  ngOnInit(): void {
    switch (this.listType) {
      case this.listType = ListType.LANGUAGES:
        this.toolsList = TOOLS.filter(tool => tool.listType === ListType.LANGUAGES)[0];
        break;
      case this.listType = ListType.FRAMEWORKS:
        this.toolsList = TOOLS.filter(tool => tool.listType === ListType.FRAMEWORKS)[0];
        break;
      case this.listType = ListType.LIBRARIES:
        this.toolsList = TOOLS.filter(tool => tool.listType === ListType.LIBRARIES)[0];
        break;
      case this.listType = ListType.SOFTWARE:
        this.toolsList = TOOLS.filter(tool => tool.listType === ListType.SOFTWARE)[0];
        break;
      case this.listType = ListType.VERSIONS_CONTROL:
        this.toolsList = TOOLS.filter(tool => tool.listType === ListType.VERSIONS_CONTROL)[0];
        break;
    }
  }
}
