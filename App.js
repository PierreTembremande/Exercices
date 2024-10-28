import { StyleSheet, Text, View, ScrollView, RefreshControl, Alert, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [obj, setObj] = useState([
    { id: "1", name: "Stan", age: 45 },
    { id: "2", name: "Francine", age: 45 },
    { id: "3", name: "Hayley", age: 18 },
    { id: "4", name: "Steve", age: 14 },
    { id: "5", name: "Roger", age: 1020 },
    { id: "6", name: "Klaus", age: 30 },
  ])

  // const affichageObj = obj.map((info) =>


  //   <View style={styles.flexContainer} key={info.id}>
  //     <Text style={styles.value}>Nom: {info.name} | Age: {info.age}</Text>
  //   </View>

  // )

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Alert.alert(
    //   "State",
    //   "En cours de chargement",
    //   [
    //     {
    //       text: "Ok",
    //     },
    //   ],

    //   { cancelable: true }
    // )
    setObj(infoData => [...infoData.reverse()]);
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
        ;
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView refreshControl={<RefreshControl colors={["blue","white","red"]} tintColor={"blue"} refreshing={refreshing} onRefresh={onRefresh} />}>
        {affichageObj}
      </ScrollView> */}

      <FlatList
        data={obj}
        renderItem={({ item }) => <View style={styles.flexContainer}><Text style={styles.value}> Nom: {item.name} | Age: {item.age}</Text></View>}
        keyExtractor={item => item.id}
        horizontal
        refreshControl={<RefreshControl colors={["blue","white","red"]} tintColor={"blue"} refreshing={refreshing} onRefresh={onRefresh}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  flexContainer: {
    flex: 1,
    margin: 16,
    justifyContent: "center",
    alignItems:"center",
  },
  value: {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 40,
    alignItems: "center",
    height: "100%"

  }

});
