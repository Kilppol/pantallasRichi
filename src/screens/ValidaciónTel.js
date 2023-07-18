import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const ValidacionTel = () => {
	return (
		<ImageBackground
			source={require('../../src/assets/ghostb.png')}
			style={styles.imageBackground}
			resizeMode='repeat'
		>
			{/* Cortina de color con opacidad */}
			<View style={styles.overlay} />

			<View style={styles.containerT}>
				{/* Contenedor para el texto title */}
				<View style={styles.titleContainer}>
					<Text style={styles.textTitle}>VALIDACIÓN DE TELÉFONO</Text>
				</View>

				{/* Texto subtitle */}
				<View style={styles.containerS}>
					<Text style={styles.textSubtitle}>
						Te hemos enviado un código a tu teléfono
					</Text>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
	},
	containerT: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerS: {
		flex: 1,
		width: 300,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -250,
	},
	titleContainer: {
		position: 'absolute',
		top: windowHeight * 0.1, // Ajusta la posición vertical del título
		justifyContent: 'center',
		alignItems: 'center',
	},
	textTitle: {
		fontSize: 35,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	textSubtitle: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default ValidacionTel;
