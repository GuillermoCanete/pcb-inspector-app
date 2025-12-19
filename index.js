import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App);
// Esto le dice a React Native qué componente cargar como principal
registerRootComponent(App);
