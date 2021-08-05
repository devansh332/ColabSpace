import MainContainer from "../../src/components/workspace/MainContainer";
import { getAllProject } from "../../src/redux/actions/projectActions";
import { wrapper } from "../../src/redux/store";
import jwtTokenCheck from "../../src/server/Services/jwtTokenCheck";

export const getServerSideProps = wrapper.getServerSideProps (
  (store) =>
     ({ req, params }) => {

        jwtTokenCheck({cookieToken: req.cookies.token}).then( async (validToken)=>{
            if(validToken){
                await store.dispatch(getAllProject());
            }else{
                res.status(400).send(`Email Sending Failed`);
            }
        })
      return  {props: {token: req.cookies.token}}
    }
);

const Workspace = ({token}) => {
    return <div><MainContainer tokenTest={token} /></div>;
};

export default Workspace;