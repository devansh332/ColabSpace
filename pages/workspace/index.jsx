import MainContainer from "../../src/components/workspace/MainContainer";
import { getAllProject } from "../../src/redux/actions/projectActions";
import { wrapper } from "../../src/redux/store";
import { verify } from 'jsonwebtoken'

export const getServerSideProps = wrapper.getServerSideProps (
  (store) =>
    async ({ req, params }) => {

        const validToken = await verify(req.cookies.token, process.env.REACT_APP_SECRET_TOKEN)
        if(validToken){
            await store.dispatch(getAllProject());
        }else{

        }
      return  {props: {token: req.cookies.token}}
    }
);

const Workspace = ({token}) => {
    return <div><MainContainer tokenTest={token} /></div>;
};

export default Workspace;