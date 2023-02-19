import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(Config.API_URL+ `/${id}`);
  console.log(id);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}> {data.description}</Text>
        <Text style={styles.price}> {data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
