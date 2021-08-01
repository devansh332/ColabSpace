
export default function ForgotPasswordForm(props) {
    return (
        <form>
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Email" />
            <div className="bottom-row">
                <span className={`btn`}
                      onClick={() => {
                          props.changeForm('SignUp');
                      }}>
                  SignUp
                </span>
                <span className={`btn`}>
                  Reset Password
                </span>
            </div>
        </form>
    )
}