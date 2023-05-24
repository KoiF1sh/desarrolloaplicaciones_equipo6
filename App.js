import StackNavigation1 from './Navigations/StackNavigation1';
import { NavigationContainer } from '@react-navigation/native';
import MembersProvider from './Context/MembersContext';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <MembersProvider>
        <StackNavigation1/>
      </MembersProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
