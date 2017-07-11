import moment from 'moment';

export function getProjectsFromItems(items) {
  const projects = [];

  Object.keys(items).forEach((id) => {
    const contentType = items[id].sys.contentType.sys.id;

    if (contentType === 'project') {
      projects.push(id);
    }
  });

  return projects;
}

export function getProjectDisplayDateUnix(project) {
  return moment(project.fields.displayDate['en-GB']).unix();
}

export function sortProjects(projects, items) {
  if (projects.length <= 1) {
    return projects;
  }

  projects.sort((a, b) => {
    const projectA = items[a];
    const projectB = items[b];
    const dateA = getProjectDisplayDateUnix(projectA);
    const dateB = getProjectDisplayDateUnix(projectB);
    return dateA - dateB;
  });

  return projects;
}

export function getSortedProjectsFromItems(items) {
  const projects = getProjectsFromItems(items);
  return sortProjects(projects, items);
}
