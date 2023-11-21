import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {PROJECT_FILTERS, ProjectFilters, ProjectFiltersItem, Projects} from "./portfolio";

@Component({
  selector: 'sds-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent{
  protected environment = environment;
  protected Projects: Projects[] = Projects;
  filteredProjects: Projects[] = Projects;
  protected PROJECT_FILTERS: ProjectFiltersItem[] = PROJECT_FILTERS;
  protected readonly ProjectFilters = ProjectFilters;

  setFilter(filterItem: ProjectFiltersItem): void {
    // switch (filterItem.value) {
    //   case ProjectFilters.MATERIAL:
    //     this.filteredProjects = this.Projects.filter((project: Projects) => project.technologies?.includes('material'));
    //     break;
    //   case ProjectFilters.PRIME_NG:
    //     this.filteredProjects = this.Projects.filter((project: Projects) => project.technologies?.includes('primeng'));
    //     break;
    //   default:
    //     this.filteredProjects = this.Projects;
    //     break;
    // }
  }
}
