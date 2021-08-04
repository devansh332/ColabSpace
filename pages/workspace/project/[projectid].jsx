import { useRouter } from "next/router";
import TaskListContainer from "../../../src/components/taskLists/TaskListContainer";
import { wrapper } from "../../../src/redux/store";
import {getAllProject} from "../../../src/redux/actions/projectActions";


export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, params }) => {
          await store.dispatch(getAllProject());
        }
);

const ProjectPage = () => {
  const router = useRouter();

  return <TaskListContainer projectid={router.query.projectid}/>;
};

export default ProjectPage;

