import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed: npx expo install @expo/vector-icons
import { Link, useRouter } from 'expo-router'; // Import useRouter
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CreateAccountScreen() {
  const router = useRouter(); // Initialize useRouter hook

  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ImageBackground source={require('../assets/images/image 3.png')} style={styles.background}>
      {/* Back button */}
      <View style={styles.backButtonContainer}>
        {/* Changed from Link asChild to TouchableOpacity with router.back() */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#EFCBCB" />
        </TouchableOpacity>
      </View>

      {/* Main content container */}
      <View style={styles.contentContainer}>

        {/* Reinstated "Create Account" Text with Pancake font */}
        <Text style={styles.createAccountHeading}>
          Create Account
        </Text>

        {/* ✍️ Inputs in BricolageGrotesque */}
        <TextInput
          placeholder="What's your First name?"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="What's your Last name?"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your Email Address"
          keyboardType="email-address"
          placeholderTextColor="#fff"
          style={styles.input}
        />

        {/* Password input with toggle */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Set Password"
            secureTextEntry={!showPassword} // Toggle secureTextEntry
            placeholderTextColor="#fff"
            style={styles.passwordInputField}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.passwordVisibilityToggle}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'} // Change icon based on state
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password input with toggle */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry
            placeholderTextColor="#fff"
            style={styles.passwordInputField}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.passwordVisibilityToggle}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-off' : 'eye'} // Change icon based on state
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* 🎀 Create Account button */}
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>
            Create Account
          </Text>
        </TouchableOpacity>

        {/* 📝 Footer text */}
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Link href="/" style={styles.loginLink}>
            Log in
          </Link>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between', // Distribute space
    paddingTop: 50, // Give some space at the top for the back button
  },
  backButtonContainer: {
    position: 'absolute', // Position absolutely to float over content
    top: 50, // Adjust as needed
    left: 20, // Adjust as needed
    zIndex: 10, // Ensure it's above other content
  },
  backButton: {
    padding: 5, // Make the touch area a bit larger
  },
  contentContainer: {
    flex: 1, // Take remaining space
    justifyContent: 'center', // Center content vertically within this container
    paddingHorizontal: 20, // Apply horizontal padding
    paddingBottom: 20, // Add some bottom padding
  },
  createAccountHeading: {
    fontSize: 28,
    marginBottom: 20,
    color: '#EFCBCB',
    fontFamily: 'Pancake', // This is back!
    // Removed: textAlign: 'center',
  },
  input: {
    fontFamily: 'BricolageGrotesque',
    borderBottomWidth: 0.5,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    color: '#fff',
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#fff',
    marginBottom: 20,
  },
  passwordInputField: {
    flex: 1, // Take up remaining space
    fontFamily: 'BricolageGrotesque',
    backgroundColor: 'transparent',
    color: '#fff',
    paddingVertical: 12,
    fontSize: 16,
  },
  passwordVisibilityToggle: {
    padding: 10, // Make the touch area larger
  },
  createAccountButton: {
    backgroundColor: '#efcbcb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  createAccountButtonText: {
    color: '#593B20',
    fontFamily: 'BricolageGrotesque',
    fontSize: 18,
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 32,
    fontFamily: 'BricolageGrotesque',
    fontSize: 14,
  },
  loginLink: {
    color: '#EFCBCB',
  },
});
