import MainContainer from "../../src/components/workspace/MainContainer";
import { getWorkspaceProject } from "../../src/redux/actions/workSpaceActions";
import { wrapper } from "../../src/redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      
      await store.dispatch(getWorkspaceProject());
    }
);

const Workspace = () => {
  return <MainContainer />;
};

export default Workspace;