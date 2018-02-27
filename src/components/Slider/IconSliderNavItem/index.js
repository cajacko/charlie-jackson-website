// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Icon from '../../Icon';
import ActiveFocusButton from '../../Buttons/ActiveFocusButton';
import SpacingContainer from '../../Containers/SpacingContainer';
import AlignContainer from '../../Containers/AlignContainer';
import './IconSliderNavItem.css';

const IconSliderNavItem = ({
  action,
  active,
  icon,
  label,
}: {
  action: () => {},
  active: boolean,
  icon: string,
  label: string,
}) => (
  <ActiveFocusButton action={action} fill active={active}>
    <SpacingContainer mb2>
      <AlignContainer hc>
        <Icon icon={icon} color={active ? 'BLUE' : 'ORANGE'} />
      </AlignContainer>
      <SpacingContainer mt>
        <div className="iconslidernavitem__text">
          <Text text={label} underline={active} reduceWithWidth />
        </div>
      </SpacingContainer>
    </SpacingContainer>
  </ActiveFocusButton>
);

IconSliderNavItem.propTypes = {
  action: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconSliderNavItem;
