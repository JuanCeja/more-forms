import React, {useState} from 'react'

const Form = (props) => {

    const [firstname, setFirstName] = useState("");
    const [firstnameError, setFirstNameError] = useState("");

    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First name is required");
        }
        else if(e.target.value.length < 2){
            setFirstNameError("First name must be atleast 2 characters long")
        }
        else if(e.target.value.length > 2){
            setFirstNameError("")
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last name is required");
        }
        else if(e.target.value.length < 2){
            setLastNameError("Last name must be atleast 2 characters long")
        }
        else if(e.target.value.length > 2){
            setLastNameError("")
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required");
        }
        else if(e.target.value.length < 2){
            setEmailError("Email must be atleast 2 characters long")
        }
        else if(e.target.value.length > 2){
            setEmailError("")
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required");
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be atleast 8 characters long")
        }
        else if(password !== confirmpassword){
            setPasswordError("Password does not match confirm password")
        }
        else if(e.target.value.length > 8){
            setPasswordError("")
        }
        
    }
    
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password is required");
        }
        else if(e.target.value.length < 8){
            setConfirmPasswordError("Confirm Password must be atleast 8 characters long")
        }
        else if(confirmpassword !== password){
            setConfirmPasswordError("Confirm password does not match password")
        }
        else if(e.target.value.length > 8){
            setConfirmPasswordError("")
        }
        
    }

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmpassword}
        console.log("Welcome", newUser);
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName}/>
                    {
                        firstnameError ?
                        <p style={{color: 'red'}}> { firstnameError } </p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastName}/>
                    {
                        lastnameError ?
                        <p style={{color:'red'}}> {lastnameError} </p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail}/>
                    {
                        emailError ? 
                        <p style={{color:'red'}}> {emailError} </p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={handlePassword}/>
                    {
                        passwordError ?
                        <p style={{color:'red'}}> {passwordError} </p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={handleConfirmPassword}/>{
                        confirmpasswordError ?
                        <p style={{color:'red'}}>{confirmpasswordError}</p>:
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    )
}

export default Form