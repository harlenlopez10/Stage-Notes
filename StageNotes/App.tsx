import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/contexts/ThemeContext';
import TabsNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}