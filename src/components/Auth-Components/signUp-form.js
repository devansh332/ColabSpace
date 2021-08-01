import React, { useState, useEffect } from 'react';
import AuthAPI from "../../client_apis/authApis";

export default function SignUpForm(props) {

    const Auth = new AuthAPI();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(()=>{
        console.log(props.formStatus);
    },[props.formStatus]);

    function submit() {
        props.setFormStatus({
            submitting: true,
        });
        Auth.emailSignUp(formData)
            .then(({data: response}) => {
                props.setFormStatus({
                    error: false,
                    submitting: false,
                });
            })
            .catch(error => {
                props.setFormStatus({
                    ...props.formStatus,
                    error: error.response.data,
                    submitting : false
                })
            });
    }

    return (
        <form>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Your name"
                   onKeyUp={e => {
                       if (e.charCode !== 13) {
                           if(!props.regex.nameRegex.test(e.target.value)){
                               props.setFormStatus({ ...props.formStatus, error: 'Enter a valid name'})
                           } else{
                               setFormData({ ...formData, name: e.target.value });
                               props.setFormStatus({...props.formStatus, formTouched: true, error: false });
                           }
                       }
                   }}/>
            <input type="email" placeholder="Email"
                   onKeyUp={e => {
                       if (e.charCode !== 13) {
                           if(!props.regex.emailRegex.test(e.target.value)){
                               props.setFormStatus({ ...props.formStatus, error: 'Enter a valid email address'})
                           } else{
                               setFormData({ ...formData, email: e.target.value });
                               props.setFormStatus({...props.formStatus, formTouched: true, error: false });
                           }
                       }
                   }}/>
            <input type="password" placeholder="Password" />
            <div className="bottom-row">
                <span className={`btn ${!props.formStatus.formTouched || !!props.formStatus.error || props.formStatus.submitting? 'disable':''}`} onClick={submit}>SignUp</span>

                <span className='btn'
                    onClick={() => {
                        props.changeForm('SignIn');
                    }}
                > SignIn
                </span>
            </div>
            {props.formStatus.error && (<p className='error'>{props.formStatus.error}</p>)}

        </form>
    )
}