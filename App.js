import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

import firebaseConfig from "./config/firebase.json";
import firebase from "firebase";

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp(firebaseConfig);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });				
			}
		});
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<Button
						onPress={() => firebase.auth().signOut()}
					>
						Logout
					</Button>
				)
			case false:
				return <LoginForm />
			default:
				return <Spinner />
		}
	}

	render() {
		return (
			<View>
				<Header headerText={"Authentication"} />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
