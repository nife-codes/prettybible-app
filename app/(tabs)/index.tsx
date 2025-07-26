import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PrettyBible 💖📖</Text>
      <Text style={styles.subtitle}>Custom design coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c71585',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
});
