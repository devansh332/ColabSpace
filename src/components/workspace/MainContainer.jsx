import Link from "next/link";
import WorkSpaceTitle from "./WorkSpaceTitle";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../hooks/useinput"
import { addNewProject,deleteProject } from "../../redux/actions/workSpaceActions";

const MainContainer = (props) => {
  const projects = useSelector((state) => state.WorkSpaceReducer.projects);
  console.log("this is project",projects)
  const dispatch = useDispatch();
  const [username, userInput] = useInput({ type: "text" });
  const addProjectHandler = () => {
    dispatch(addNewProject({projectName: username,description:"this is description ",projectOwner:"61061e33bcc1803cf59e24c9" }));
  };
  const deleteProjectHandler = (projectId) =>{
    dispatch(deleteProject({projectId: projectId }));
  }
  return (
    <div>
      <WorkSpaceTitle />
      <br />
      {userInput}
      <button onClick={addProjectHandler}>nama</button>
      <br />
      {projects.map((project) => {
        return (
          <>
          <h1 key={project._id}>
            <Link href={`workspace/project/${project._id}`}>
              <a>{`${project.projectName}`}</a>
            </Link>
            <button onClick={()=>{deleteProjectHandler(project._id)}}>delete</button>
          </h1>
          <br />
          <span>description - {project.description}</span>
          </>
        );
      })}
    </div>
  );
};

export default MainContainer;
