import React from 'react';
import Item from 'containers/Item/Item';
import Project from 'components/Project/Project';

const ProjectContainer = ({ templateDataItem }) => (
  <Item element={Project} itemId={templateDataItem} />
);

export default ProjectContainer;
