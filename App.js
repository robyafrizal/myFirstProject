import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Body from './components/Body';
export default () => (
  <View style={{flex: 1}}>
    {/* <Text>Hello Roby Afrizal Palmendha</Text> */}
    <Header />
    <Subheader />
    <Body />
  </View>
);

// const App = () => {
//   return (
//     <View>
//       <Text>Hello Roby Afrizal Palmendha</Text>
//       <Text>Ready to be Full Stack Developer</Text>
//     </View>
//   );
// };
// export default App;

//Bisa disederhanakan menjadi
// export default () => (
//     <View>
//       <Text>Hello Roby Afrizal Palmendha</Text>
//       <Text>Ready to be Full Stack Developer</Text>
//     </View>
//   )
