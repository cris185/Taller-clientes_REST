import React from 'react';
import { Skeleton, Card, Avatar } from 'antd';

import PetImage from '../../assets/petstore.png';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

/**
 * @typedef PetCardProps
 * @type {Object}
 * @property {Boolean} loading - Whether the component is loading or not.
 * @property {Object} pet - description of the pet.
 */

/**
 * @description PetCard component
 * @param {PetCardProps} props
 * @returns {JSX} JSX
 */

const PetCard = ({ loading, pet }) => {
  const { id, name, category } = pet;

  return (
    <Card.Grid style={gridStyle}>
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar src={PetImage} />}
          title={<Link to={`/pet/${id}`}>{name || 'Pet Name'}</Link>}
          description={category?.name}
        />
      </Skeleton>
    </Card.Grid>
  );
};

export default PetCard;
