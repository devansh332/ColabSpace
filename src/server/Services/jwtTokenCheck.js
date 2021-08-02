import { verify } from 'jsonwebtoken'

const jwtTokenCheck = async (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(501).send('Access Denied');

    let myPromise = new Promise((resolve, reject)=> {
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