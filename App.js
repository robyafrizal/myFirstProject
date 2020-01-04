import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Body from './components/Body';
export default () => (
  <View style={styles.container}>
    <Header title="MY QUOTES APPS " />
    <Subheader subtitle="Popular Quotes" />

    <Body content="Jangan pernah berpikir bahwa mimpimu tidak akan mungkin tercapai hanya karena mereka tidak terwujud dalam waktu dekat" />
    <Body content="Hargailah Hidupmu dengan Banyak Bersyukur" />
    <Body content="Keluar dari zona nyaman itu membuatmu tidak nyaman untuk sementara, Tetapi akan membuatmu jauh lebih nyaman di hari nanti" />
    <Body content="Lupakan masa lalu, Nikmatilah masa sekarang, Jangan kuatirkan masa depan" />
    <Body content="Apabila kamu sudah memutuskan menekuni suatu bidang, Jadilah orang yang konsisten. Itu adalah kunci keberhasilan yang sebenarnya" />
    <Body content="Ingat saat anda malas ada yang terus bekerja, Saat anda berhenti ada yang terus melaju" />
    <Body content="Jika salah perbaiki. Jika gagal coba lagi. Tapi jika kamu menyerah, Semuanya selesai" />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1},
});

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
