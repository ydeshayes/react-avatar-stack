import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = styled.div`
  display: flex;
  flex-shrink: 0;

  div:not(:first-of-type) {
    margin-left: -${props => props.avatarSize / 2}px;
  }

  div:hover {
    margin-left: 0px;
    margin-right: ${props => props.avatarSize / 2}px;
  }
`;

const Avatar = styled.div`
  cursor: pointer;
  z-index: ${props => props.index};
`;

const AvatarPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.numberLeftBackgroundColor};
  color: ${props => props.numberLeftColor};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  user-select: none;
`;

const AvatarStack = ({
  children = [],
  nextOverlapPrevious = true,
  avatarSize = 32,
  maxAvatarNumber = 9,
  numberLeftBackgroundColor,
  numberLeftColor,
  onNumberLeftClick = () => {}
}) => (
  <Layout avatarSize={avatarSize}>
    {
      Array.isArray(children)
      ? children.slice(0, maxAvatarNumber + 1)
        .map((child, index) => (
          <Avatar
            index={nextOverlapPrevious ? index : -index}
            key={index}>
            {child}
          </Avatar>
        ))
      : <Avatar>
        {children}
      </Avatar>
    }
    {
      children.length > maxAvatarNumber
        ? <Avatar index={nextOverlapPrevious ? maxAvatarNumber + 2 : -(maxAvatarNumber + 2)}>
          <AvatarPlaceholder
            onClick={onNumberLeftClick}
            size={avatarSize}
            numberLeftBackgroundColor={numberLeftBackgroundColor}
            numberLeftColor={numberLeftColor}
          >
            {`+${children.length - maxAvatarNumber}`}
          </AvatarPlaceholder>
        </Avatar>
        : false
    }
  </Layout>);

AvatarStack.propTypes = {
  children: PropTypes.node,
  nextOverlapPrevious: PropTypes.bool,
  avatarSize: PropTypes.number,
  maxAvatarNumber: PropTypes.number
};

export default AvatarStack;
