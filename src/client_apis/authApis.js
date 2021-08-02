import Axios from 'axios';
export const urlBackEnd = process.env.LOCAL_URL;
class AuthAPI {
    constructor() {
        this.API = Axios.create({
            baseURL: urlBackEnd,
        });
    }

    emailLogin(data) {
        return this.API.post(`/auth/signIn`, data);
    }

    emailSignUp(data) {
        return this.API.post(`/auth/signUp`, data);
    }

    forgotPassword(data) {
        return this.API.post(`/auth/forgotPassword`, data);
    }

}

export default AuthAPI;
