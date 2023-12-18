import {Component} from '@angular/core';
import {PROJECT_FILTERS, ProjectFilters, ProjectFiltersItem, Project, Technology, Projects} from "./portfolio";
import {BreakpointService} from "../../services/breakpoint.service";
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  protected readonly personalInformation = personalInformation;
  protected Projects: Project[] = Projects;
  protected PROJECT_FILTERS: ProjectFiltersItem[] = PROJECT_FILTERS;
  protected ProjectFilters = ProjectFilters;

  filteredProjects: Project[] = Projects;
  initSlidesAmount: number = 5;

  constructor(private breakpointService: BreakpointService) {
    if (this.breakpointService.isScreenMobile) {
      this.initSlidesAmount = 3;
    }
  }

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
