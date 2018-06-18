import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';
import RemoveIcon from './RemoveIcon';

const ListItem = (props) => {
  return (
    <Wrapper>
      <Item onClick={props.onClick}>
        {props.item}
      </Item>
    </Wrapper>
  );
};

ListItem.propTypes = {
  item: PropTypes.any,
  itemIndex: PropTypes.any,
};

export default ListItem;
