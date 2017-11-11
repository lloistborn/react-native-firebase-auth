import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

import firebaseConfig from "./config/firebase.json";
import firebase from "firebase";

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		return (
			<View>
				<Header headerText={"Authentication"} />
				<LoginForm />
			</View>
		);
	}
}

export default App;
