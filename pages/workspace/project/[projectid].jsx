import { useRouter } from "next/router";
import {
  getProjectInfo,
  moveTaskAction,
} from "../../../src/redux/actions/projectPageActions";
import { wrapper } from "../../../src/redux/store";
import { useSelector, useDispatch } from "react-redux";
import TaskList from "../../../src/components/projectPage/TaskList";
import InfoBanner from "../../../src/components/projectPage/infoBanner";
import styles from "../../../styles/Home.module.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";
import {
  CHANGE_TASK_ORDER,
  MOVE_TASK,
} from "../../../src/redux/constants/projectActionConstants";
import NoSSR from "react-no-ssr";

const ProjectPage = () => {
  resetServerContext();
  const router = useRouter();
  const dispatch = useDispatch();
  const projectInfo = useSelector((state) => state.ProjectReducer.projectInfo);
  const { projectid } = router.query;
  const { taskLists, loading } = projectInfo;
  const onDragEnd = (result) => {
    console.log("drag result", result);
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId === result.source.droppableId) {
      if (result.destination.index === result.source.index) {
        return;
      }
      dispatch({
        type: CHANGE_TASK_ORDER,
        payload: {
          initialIndex: result.source.index,
          finalIndex: result.destination.index,
          taskListId: result.destination.droppableId,
        },
      });
    }
    if (result.destination.droppableId != result.source.droppableId) {
      dispatch(
        moveTaskAction({
          taskId:result.draggableId,
          sourceTaskListId: result.source.droppableId,
          destinationTaskListId: result.destination.droppableId,
          initialIndex: result.source.index,
          finalIndex: result.destination.index,
        })
      );
    }
  };
  return (
    <div className={styles.projectPage}>
      <p>Post: {projectid}</p>
      <InfoBanner />

      <div className={styles.taskListContainer}>
        <NoSSR>
          <DragDropContext onDragEnd={onDragEnd}>
            {taskLists.map((tasklist) => {
              return <TaskList key={tasklist._id} tasklist={tasklist} />;
            })}
          </DragDropContext>
        </NoSSR>
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
