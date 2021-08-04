import { verify } from 'jsonwebtoken'

const jwtTokenCheck = async (req, res, next) => {
    const token = req.header('auth-token');

    let myPromise = new Promise((resolve, reject)=> {
        if(!token) {
            reject();
            return res.status(501).send('Access Denied');
        }
        try{
            req.user = verify(token, process.env.SECRET_TOKEN);

            resolve(true);
        }
        catch(error){
            res.status(400).send('Invalid Token');
            reject();
        }
    });
    return await myPromise;

}

export default jwtTokenCheck