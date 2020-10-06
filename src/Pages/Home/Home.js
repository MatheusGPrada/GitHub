import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import Style from './Styles';

const Home = () => {
  const [user, setUser] = useState('');
  const { navigate } = useNavigation();

  function goToRepositoriesList(user) {
    navigate('RepositoriesList', { user: user });
  }

  return (
    <View style={Style.container}>
      <View style={Style.iconView}>
        <AntDesign name="github" size={50} color="black" />
      </View>
      <View style={Style.body}>
        <View>
          <TextInput
            style={Style.userInput}
            value={user}
            onChangeText={setUser}
            autoCapitalize="none"
            placeholder="Usuário"
          />
        </View>
        <View style={Style.marginTop}>
          <Button
            style={Style.submitButton}
            color="black"
            onPress={() => goToRepositoriesList(user)}
            title="Buscar"
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default Home;
