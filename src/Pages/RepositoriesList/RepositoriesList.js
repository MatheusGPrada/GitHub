import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { Card } from 'react-native-paper';

import Style from './Styles';
import api from '../../Services/api';

const RepositoriesList = () => {
  const route = useRoute();
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    await api
      .get(`/${route.params.user}/repos`)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <ScrollView style={Style.container}>
      {!error &&
        repositories.map((row) => (
          <Card key={row.name} style={Style.card}>
            <Card.Title title={row.name} />
            <Card.Content>
              <Text>{row.language}</Text>
            </Card.Content>
          </Card>
        ))}
      {!!error && (
        <View style={Style.containerError}>
          <Text style={Style.error}>Ocorreu um erro</Text>
          <Text style={Style.error}>{error.message}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default RepositoriesList;
