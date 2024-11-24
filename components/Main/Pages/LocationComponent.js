import React from 'react';
import {Text} from 'react-native';
import GridContainers from '../GridContainers/GridContainers';
import Recommend from '../Recommend/Recommend';
import {gStyle} from '../../../styles/style';

function LocationComponent() {
  return (
    <>
      <Text style={gStyle.title}>Популярное</Text>
      <GridContainers />
      <Text style={gStyle.title}>Рекомендуем</Text>
      <Recommend />
    </>
  );
}

export default LocationComponent;
