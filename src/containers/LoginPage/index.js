import React from 'react';
import Form from './Form';
import Input from './Input';
import StyledButton from '../../components/Button/StyledButton';
import H1 from '../../components/H1';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            userName: "",
            password: ""
        };
    }
    /**
   * when initial state username is not null, submit the form to load repos
   */
    componentDidMount() {

    }
	
	handleChange(event) {
		console.log(event);
		if (event.target.type === 'password') {
			this.setState({
				password: event.target.value
			});
		} else {
			this.setState({
				userName: event.target.value
			});
		}
		console.log(this.state);
	}
	
	handleSubmit(event) {
		this.props.loginUser(this.state.userName, this.state.password);
		event.preventDefault();
	}

    render() {
        return (
		<div>
			<Form onSubmit={this.handleSubmit.bind(this)}>
            <H1>Login Page</H1>
			<label>{this.props.message}</label>
			<Input type="text" onChange={this.handleChange.bind(this)} placeholder="User name"></Input>
			<Input type="password" onChange={this.handleChange.bind(this)} placeholder="Password"></Input>
			<StyledButton type="submit">Login</StyledButton>
			</Form>
		</div>
        );
    }
}
