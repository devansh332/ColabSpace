import { useRouter } from "next/router";
import { getProjectInfo } from "../../../src/redux/actions/projectPageActions";
import { wrapper } from "../../../src/redux/store";
import { useSelector, useDispatch } from "react-redux";
import TaskList from "../../../src/components/projectPage/TaskList";
import InfoBanner from "../../../src/components/projectPage/infoBanner";
import styles from '../../../styles/Home.module.scss'
const ProjectPage = () => {
  const router = useRouter();
  const projectInfo = useSelector((state) => state.ProjectReducer.projectInfo);
  const { projectid } = router.query;
  const { taskLists, loading } = projectInfo;

  return (
    <div>
      <p>Post: {projectid}</p>
      <InfoBanner />
      <div className={styles.taskList}>
        {taskLists.map((tasklist) => {
          return <TaskList tasklist={tasklist}/>;
        })}
      </div>
    </div>
  );
};

export default ProjectPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getProjectInfo(params.projectid));
    }
);
