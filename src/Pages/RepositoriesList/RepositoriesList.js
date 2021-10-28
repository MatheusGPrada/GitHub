import React from "react";
import { Text, ScrollView, View, Linking } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Card } from "react-native-paper";

import Style from "./Styles";

const RepositoriesList = () => {
  const route = useRoute();
  const {
    params: { repositories },
  } = route;

  console.debug("repositories", JSON.stringify(repositories));

  return (
    <View style={Style.safeAreaContainer}>
      <ScrollView style={Style.container}>
      <Text style={Style.title}>Clique no card para ser redirecionado ao repositório</Text>
        {repositories.map((row) => {
          const { name, html_url, description, language, size } = row;
          return (
            <Card
              key={name}
              style={[Style.card, size < 10 ? Style.lightBlue : size < 100 ? Style.blue : Style.darkBlue]}
              onPress={() =>
                Linking.canOpenURL(html_url).then((supported) => {
                  if (supported) {
                    return Linking.openURL(html_url);
                  }
                })
              }
            >
              <Card.Title title={name} subtitle={language}/>
              <Card.Content>
                <Text>{description}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RepositoriesList;
