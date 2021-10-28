import React, { useState } from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { TextInput, Snackbar } from "react-native-paper"
import api from "../../Services/api"

import { AntDesign } from "@expo/vector-icons"

import Style from "./Styles"

const Home = () => {
  const [user, setUser] = useState("")
  const [error, setError] = useState("")
  const [visible, setVisible] = useState(false)
  const { navigate } = useNavigation()

  const submit = async () => {
    setError('')
    let repositories = []
    await api
      .get(`/${user}/repos`)
      .then((response) => {
        repositories = response.data
      })
      .catch(() => {
        setError('Usuário inválido')
        setVisible(true)
        return
      })
    if(repositories.length > 0){
      navigate("RepositoriesList", { repositories: repositories })
    }
  }

  return (
    <View style={Style.container}>
      <AntDesign name="github" size={100} color="black" />
      <View style={Style.TextInput}>
        <TextInput
          onChangeText={setUser}
          placeholder={"Usuário"}
          right={
            <TextInput.Icon
              name={() => <AntDesign name="right" size={30} color="black" />}
              onPress={() => submit()}
            />
          }
          style={Style.userInput}
          theme={{ colors: { primary: "black" } }}
          value={user}
        />
      </View>
      {error.length > 0 && (
        <Snackbar
            action={{
                label: 'OK',
                onPress: () => setVisible(false),
            }}
            onDismiss={() => setVisible(false)}
            style={{ backgroundColor: 'red' }}
            visible={visible}
        >
            {error}
        </Snackbar>
      )}
    </View>
  )
}

export default Home
