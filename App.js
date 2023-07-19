import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import CrearServcio from './src/screens/CrearServicio';
//import ValidacionTel from './src/screens/ValidacionTel';
import OlvidasteContrasena from './src/screens/OlvidasteContrasena';

export default function App() {
	return <OlvidasteContrasena />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
