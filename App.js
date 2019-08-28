import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.f20}>App!</Text>
//       </View>
//     );
//   }
// }

export default function() {
  return (
    <View style={styles.container}>
      <Text style={styles.f20}>App</Text>
      <Text style={styles.f20}>Diego Aquinok</Text>
      <Progress.Bar progress={0.3} width={200} />
      <Progress.Pie progress={0.4} size={50} />
      <Progress.Circle size={30} indeterminate={true} />
      <Progress.CircleSnail color={['red', 'green', 'blue']} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 60,
  },
});




