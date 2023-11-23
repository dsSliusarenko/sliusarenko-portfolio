import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {PROJECT_FILTERS, ProjectFilters, ProjectFiltersItem, Project, Technology, Projects} from "./portfolio";

@Component({
  selector: 'sds-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  protected environment = environment;
  protected Projects: Project[] = Projects;
  filteredProjects: Project[] = Projects;
  protected PROJECT_FILTERS: ProjectFiltersItem[] = PROJECT_FILTERS;
  protected readonly ProjectFilters = ProjectFilters;

  setFilter(filterItem: ProjectFiltersItem): void {
    switch (filterItem.value) {
      case ProjectFilters.MATERIAL:
        this.filterProjects(ProjectFilters.MATERIAL)
        break;
      case ProjectFilters.PRIME_NG:
        this.filterProjects(ProjectFilters.PRIME_NG)
        break;
      default:
        this.filteredProjects = this.Projects;
        break;
    }
  }

  filterProjects(projectFilter: ProjectFilters): void {
    this.filteredProjects = this.Projects.filter((project: Project) =>
      project.technologies.some((technology: Technology) =>
        technology.title === projectFilter));
  }
}
