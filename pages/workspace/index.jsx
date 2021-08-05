import MainContainer from "../../src/components/workspace/MainContainer";
import { getAllProject } from "../../src/redux/actions/projectActions";
import { wrapper } from "../../src/redux/store";

export const getServerSideProps = wrapper.getServerSideProps (
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getAllProject());
      return  {props: {token: req.cookies.token}}
    }
);

const Workspace = ({token}) => {
    return <div><MainContainer tokenTest={token} /></div>;
};

export default Workspace;