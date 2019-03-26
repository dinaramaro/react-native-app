import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const onPressAddArticle = () => {};

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Aucun article</Text>
      <Button title="Ajouter un article" onPress={onPressAddArticle} />
    </View>
  );
};

export default App;
