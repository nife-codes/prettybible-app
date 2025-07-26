import { Link } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateAccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' }}>
        Create Account
      </Text>

      <TextInput
        placeholder="Full Name"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#C79AB4',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/" style={{ marginTop: 20, textAlign: 'center', color: '#666' }}>
        Already have an account? Log in
      </Link>
    </View>
  );
}
