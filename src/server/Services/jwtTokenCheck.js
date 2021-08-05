import { verify } from 'jsonwebtoken'

const jwtTokenCheck = async ({req, cookieToken}) => {
    const token = req?.header('auth-token') || cookieToken;

    let myPromise = new Promise((resolve, reject)=> {
        if(!token) {
            reject(false);
        }
        try{
            req.user = verify(token, process.env.REACT_APP_SECRET_TOKEN);

            resolve(true);
        }
        catch(error){
            reject(false);
        }
    });
    return await myPromise;

}

export default jwtTokenCheck