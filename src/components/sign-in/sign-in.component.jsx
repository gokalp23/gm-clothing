import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    //Submit Data
    doSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log('An Error Occured!', error.message);
        }
    }

    //Handle Change
    doChange = (event) => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account ?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.doSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        doChange={this.doChange} 
                        label='email'
                        required/>
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        doChange={this.doChange} 
                        label='password'
                        required/>
                    <div className='button-group'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                            Sign in with Google 
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;