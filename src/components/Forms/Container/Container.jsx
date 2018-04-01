// @flow

import * as React from 'react';
import './Container.css';

type Props = {
  children: React.Node,
};

/**
 * Form container that limits the max width of forms
 *
 * @param {Object} props The props passed to the component
 *
 * @return {ReactElement} Markup to render
 */
const FormContainer = ({ children }: Props) => (
  <div className="formcontainer">{children}</div>
);

export default FormContainer;
