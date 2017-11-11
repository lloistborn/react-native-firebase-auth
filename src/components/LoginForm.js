import React, { Component } from 'react';
import { Text } from "react-native";
import firebase from "firebase";

import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
	state = { email: "", password: "", error: "", loading: false };

	onButtonPress() {		
		this.setState({ error: "", loading: true });

		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFail.bind(this))
		});
	}

	onLoginFail() {
		this.setState({ 
			error: "Auth failed",
			loading: false
		});		
	}

	onLoginSuccess() {
		this.setState({ 
			email: "", 
			password: "", 
			loading: false,
			error: "" 
		})
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}
	
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="ex: sherlock@21backerstreet.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: "center",
		color: "red"
	}
}

export default LoginForm;
