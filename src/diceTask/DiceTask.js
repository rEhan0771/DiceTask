/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import styles from './style';
import Card from '../components/Card';


const sortArr = [{ key: 'Stars', value: 'stargazers_count' }, { key: 'Watchers', value: 'watchers_count' }
  , { key: 'Score', value: 'score' }, { key: 'Name', value: 'name' }
  , { key: 'Created At', value: 'created_at' }, { key: 'Updated At', value: 'updated_at' }
]
export function DiceTask() {
  const [data, setData] = useState({ items: [] });
  const [inputValue, setInPutValue] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [sortToggle, setSortToggle] = useState(Array(sortArr.length).fill(false))


  const apiCall = (query) => {
    console.log('query', query)
    fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log('err', err))
  }

  const inputHandler = (text) => {
    setInPutValue(text)
    apiCall(text);
  }

  const onSortPress = (val, i) => {
    const dataCopy = { ...data };
    const sortToggleCopy = [...sortToggle]

    if (typeof dataCopy?.items[0][val?.value] === 'number') {

      if (!sortToggle[i]) {
        dataCopy.items.sort((a, b) => a[val.value] - b[val.value]);
      }
      else {
        dataCopy.items.sort((a, b) => b[val.value] - a[val.value]);
      }
      console.log('temp', val, dataCopy.items[0][val.value])
      sortToggleCopy[i] = !sortToggle[i]
      setSortToggle(sortToggleCopy)
      setData(dataCopy);
    }
    else if (val?.key === 'Name') {
      if (!sortToggle[i]) {
        dataCopy.items.sort((a, b) => a[val.value].localeCompare(b[val.value]));
      }
      else {
        dataCopy.items.sort((a, b) => b[val.value].localeCompare(a[val.value]));
      }
      console.log('temp else', val, dataCopy.items[0][val.value])
      sortToggleCopy[i] = !sortToggle[i]
      setSortToggle(sortToggleCopy)
      setData(dataCopy);
    }
    else if (val?.key === 'Created At' || val?.key === 'Updated At') {
      if (!sortToggle[i]) {
        dataCopy.items.sort((a, b) => new Date(a[val.value]) - new Date(b[val.value]));
      }
      else {
        dataCopy.items.sort((a, b) => new Date(b[val.value]) - new Date(a[val.value]));
      }
      console.log('temp else', val, dataCopy.items[0][val.value])
      sortToggleCopy[i] = !sortToggle[i]
      setSortToggle(sortToggleCopy)
      setData(dataCopy);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder='Search any repository...'
          onChangeText={inputHandler}
          value={inputValue}
          style={styles.inputStyle}
        />
      </View>
      {data?.items && data?.items?.length > 0 &&
        <View style={styles.sortContainer}>
          <View style={styles.sortImg}>
            <Image source={require('../assets/sortBlack.png')} style={styles.img} />
            <Text style={{ color: 'black' }}>Sort</Text>
          </View>
          <FlatList
            data={sortArr}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({ item, index }) => (
              <View style={{ marginLeft: 5 }}>
                <Pressable
                  onPress={() => onSortPress(item, index)}
                  style={styles.pressContainer}>
                  <Image source={require('../assets/sort.png')} style={styles.img} />
                  <Text style={{ color: 'white' }}>{item.key}</Text>
                </Pressable>
              </View>
            )}
          />
        </View>}
      {data?.items && data?.items?.length > 0 &&
        <FlatList
          data={data?.items}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatlistStyle}
          renderItem={({ item, index }) => <Card item={item} index={index} />}
        />
      }
    </SafeAreaView>
  );
}


export default DiceTask;
