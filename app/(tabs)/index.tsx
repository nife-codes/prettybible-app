import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PrettyBible 💖📖</Text>
      <Text style={styles.subtitle}>Custom design coming soon!</Text>
      <Link href="/create-account" style={{ marginTop: 24, color: '#c71585', fontWeight: 'bold' }}>
        Go to Create Account
      </Link>
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
