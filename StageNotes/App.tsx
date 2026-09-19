import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

// Importamos los Providers
import { AuthProvider } from './src/contexts/AuthContext';
import { LanguageProvider } from './src/contexts/LanguageContext';

export default function App() {
  return (
    // Envolvemos la app primero con Auth, luego con Language (o viceversa)
    <AuthProvider>
      <LanguageProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </LanguageProvider>
    </AuthProvider>
  );
}