import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Button, Card, CardSection } from "./common";

class LoginForm extends Component {
	
	render() {
		return (
			<Card>
				<CardSection>
					<TextInput style={{ height: 20, width: 100 }} />
				</CardSection>
				<CardSection />

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}
//make this component available to the app
export default LoginForm;
