import { Link } from 'expo-router';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateAccountScreen() {
  return (
    <ImageBackground source={require('../assets/images/image 3.png')} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

        <Text style={{
          fontSize: 28,
          marginBottom: 20,
          color: '#EFCBCB',
          fontFamily: 'Pancake',
        }}>
          Create Account
        </Text>

        {/* ✍️ Inputs in BricolageGrotesque */}
        <TextInput
          placeholder="What's your First name?"
          placeholderTextColor="#fff"
          style={{
            fontFamily: 'BricolageGrotesque',
            borderBottomWidth: 0.5,
            borderColor: '#fff',
            backgroundColor: 'transparent',
            color: '#fff',
            paddingVertical: 12,
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="What's your Last name?"
          placeholderTextColor="#fff"
          style={{
            fontFamily: 'BricolageGrotesque',
            borderBottomWidth: 0.5,
            borderColor: '#fff',
            backgroundColor: 'transparent',
            color: '#fff',
            paddingVertical: 12,
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Enter your Email Address"
          keyboardType="email-address"
          placeholderTextColor="#fff"
          style={{
            fontFamily: 'BricolageGrotesque',
            borderBottomWidth: 0.5,
            borderColor: '#fff',
            backgroundColor: 'transparent',
            color: '#fff',
            paddingVertical: 12,
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Set Password"
          secureTextEntry
          placeholderTextColor="#fff"
          style={{
            fontFamily: 'BricolageGrotesque',
            borderBottomWidth: 0.5,
            borderColor: '#fff',
            backgroundColor: 'transparent',
            color: '#fff',
            paddingVertical: 12,
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="#fff"
          style={{
            fontFamily: 'BricolageGrotesque',
            borderBottomWidth: 0.5,
            borderColor: '#fff',
            backgroundColor: 'transparent',
            color: '#fff',
            paddingVertical: 12,
            marginBottom: 50,
          }}
        />

        {/* 🎀 Create Account button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#efcbcb',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{
            color: '#593B20',
            fontFamily: 'BricolageGrotesque',
            fontSize: 16,
          }}>
            Create Account
          </Text>
        </TouchableOpacity>

        {/* 📝 Footer text */}
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 32,
          fontFamily: 'BricolageGrotesque',
          fontSize: 14,
        }}>
          Already have an account?{' '}
          <Link href="/" style={{ color: '#EFCBCB' }}>
            Log in
          </Link>
        </Text>
      </View>
    </ImageBackground>
  );
}
