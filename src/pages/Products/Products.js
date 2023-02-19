import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "react-native-config";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

function Products({navigation}) {

  const {loading, data, error}= useFetch(Config.API_URL);

  const handleProductSelect = (id) => {
    navigation.navigate('DetailScreen',{id});

  };
  const renderProduct = ({item}) => (
  <ProductCard product={item} onSelect={()=> handleProductSelect(item.id)} />
  );
  
  if(loading){
    return<Loading />;
  }

  if(error) {
    return <Text>{error}</Text>
  }


  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

export default Products;