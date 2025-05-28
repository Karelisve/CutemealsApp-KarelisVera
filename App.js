import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/global/colors';
import Header from './src/components/Header';

import HomeNavigator from './src/navigation/HomeNavigator';



export default function App() {

  return (
    <View style={styles.container}>
      <Header title= {"CuteMeals"} />
      <HomeNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
