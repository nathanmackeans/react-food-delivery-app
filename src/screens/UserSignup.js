import React, { Component } from "react";
import { Link } from 'react-router-dom';

class UserSignup extends Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            email: '',
            gender: '',
            age: '',
            country: '',
            city: '',
            password: '',
            confirmPassword: '',

            isfullName: true,
            isEmail: true,
            isGender: true,
            isAge: true,
            isCountry: true,
            isCity: true,
            isPassword: true,
            isConfirmPassword: true,
        }

        this.userSignup = this.userSignup.bind(this);
    }

    userSignup() {
        const { fullName, email, gender, age, country, city, password, confirmPassword } = this.state;

        //full name validation
        if (fullName.length === 0) {
            this.setState({ isfullName: false });
        } else {
            this.setState({ isfullName: true });
        }

        // email validation
        const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailResult = emailREGEX.test(email);

        if (emailResult === false) {
            this.setState({ isEmail: false });
        } else {
            this.setState({ isEmail: true });
        }

        //gender validation
        if (gender === '') {
            this.setState({ isGender: false });
        } else {
            this.setState({ isGender: true });
        }

        //age validation
        if (age < '18') {
            this.setState({ isAge: false });
        } else {
            this.setState({ isAge: true });
        }

        //country validation
        if (country === '') {
            this.setState({ isCountry: false });
        } else {
            this.setState({ isCountry: true });
        }

        //city validation
        if (city === '') {
            this.setState({ isCity: false });
        } else {
            this.setState({ isCity: true });
        }

        //password validation
        const passwordREGEX = new RegExp("^(?=.*[0-9])(?=.{6,})");
        const passwordResult = passwordREGEX.test(password);

        if (passwordResult === false) {
            this.setState({ isPassword: false });
        } else {
            this.setState({ isPassword: true });
        }

        //confirm password validation
        if (password !== confirmPassword) {
            this.setState({ isConfirmPassword: false });
        } else {
            this.setState({ isConfirmPassword: true });
        }
    }

    render() {
        const { isfullName, isEmail, isGender, isAge, isCountry, isCity, isPassword, isConfirmPassword } = this.state;
        return (
            <div className="UserSignup login">
                <div className="tabs">
                    <Link className="link" to="/userLogin">
                        <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    </Link>
                    <Link className="link" to="/userSignup">
                        <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                    </Link>
                </div>
                <h2>Sing up - User</h2>
                <input onChange={(e) => { this.setState({ fullName: e.target.value }) }} type="text" placeholder="Full name" /><br />
                {!isfullName && <div className="formError">Enter your Full name</div>}
                <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Email" /><br />
                {!isEmail && <div className="formError">Invalid email</div>}
                <label>
                    <input onClick={(e) => { this.setState({ gender: 'male' }) }} type="radio" name="gender" />
                    Male
                </label>
                <label>
                    <input onClick={(e) => { this.setState({ gender: 'female' }) }} type="radio" name="gender" />
                    Female
                </label><br />
                {!isGender && <div className="formError">Please select one</div>}
                <input onChange={(e) => { this.setState({ age: e.target.value }) }} type="number" placeholder="Age" /><br />
                {!isAge && <div className="formError">Age should not be less than 18</div>}
                <select onChange={(e) => { this.setState({ country: e.target.value }) }}>
                    <option value="">Country</option>
                    <option value="pakistan">Pakistan</option>
                </select>
                {!isCountry && <div className="formError">Select your country</div>}
                <select onChange={(e) => { this.setState({ city: e.target.value }) }}>
                    <option value="">City</option>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">Lahore</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="peshawar">Peshawar</option>
                </select><br />
                {!isCity && <div className="formError">Select your city</div>}
                <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" /><br />
                {!isPassword && <div className="formError">Password should contain minimum 6 characters and at least a number</div>}
                <input onChange={(e) => { this.setState({ confirmPassword: e.target.value }) }} type="password" placeholder="Confirm Password" /><br />
                {!isConfirmPassword && <div className="formError">Password doesn't match</div>}
                <input onClick={this.userSignup} type="submit" value="Register" /><br />
            </div>
        )
    }
}

export default UserSignup;