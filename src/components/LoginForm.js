import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
	state = { email: "", password: "" };
	
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
				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
