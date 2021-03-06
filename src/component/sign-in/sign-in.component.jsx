import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = this.state
    try{
      await auth.signInWithEmailAndPassword(email,password)
    
    this.setState({ email: "", password: "" });
  }
  catch(error){
    console.log(error)
  }
};

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have An Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label="Email"
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
          />
          <div className='buttons'>
          <CustomButton type="Submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
          SIGN IN WITH GOOGLE
        </CustomButton>
        </div>
        </form>
        
      </div>
    );
  }
}

export default SignIn;
