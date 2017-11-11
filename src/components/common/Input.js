import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{props.label}</Text>
			<TextInput 
				placeholder={props.placeholder}
				autoCorrect={false}
				autoFocus={true}
				style={styles.inputStyle}
				value={props.value}
				onChangeText={props.onChangeText}
			/>
		</View>
	);
};

const styles = {
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	inputStyle: {
		color: "#000",
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	}
};

export { Input };
