import Link from "next/link";
import WorkSpaceTitle from "./WorkSpaceTitle";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../hooks/useinput"
import { addNewProject } from "../../redux/actions/projectActions";

const MainContainer = (props) => {
  const projects = useSelector((state) => state.ProjectReducer);
  const dispatch = useDispatch();
  const [username, userInput] = useInput({ type: "text" });
  const addProject = () => {
    console.log("handeling this situation")
    dispatch(addNewProject({projectName: username }));
  };
  return (
    <div>
      <WorkSpaceTitle />
      <br />
      {userInput}
      <button onClick={addProject}>name</button>
      <br />
      {projects.map((project) => {
        return (
          <>
          <h1 key={project?._id}>
            <Link href={`workspace/project/${project?._id}`}>
              <a>{`${project?.projectName}`}</a>
            </Link>
          </h1>
          <span>by - {project?.projectOwner?.userName}</span>
          <br />
          <span>description - {project?.description}</span>
          </>
        );
      })}
    </div>
  );
};

export default MainContainer;
