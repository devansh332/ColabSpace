import MainContainer from "../../src/components/workspace/MainContainer";
import { getAllProject } from "../../src/redux/actions/projectActions";
import { wrapper } from "../../src/redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getAllProject());
    }
);

const Workspace = () => {
  return <MainContainer />;
};

export default Workspace;