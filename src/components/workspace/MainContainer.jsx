import Link from "next/link";
import WorkSpaceTitle from "./WorkSpaceTitle";
import useInput from "../../hooks/useInput"

const projects = [{
  _id:1322,
  projectName:"StartingProject",
  projectOwner:{userName:"Devansh"},
  description:"Another description"
}
]
const MainContainer = () => {
  const [username, userInput] = useInput({ type: "text" });
  
  const addProject = () => {
    console.log("handeling this situation")
  };
  
  return (
    <div>
      <WorkSpaceTitle />
      <br />
      {userInput}
      <button onClick={addProject}>nama</button>
      <br />
      {projects.map((project) => {
        return (
          <>
          <h1 key={project._id}>
            <Link href={`workspace/project/${project._id}`}>
              <a>{`${project.projectName}`}</a>
            </Link>
          </h1>
          <span>by - {project.projectOwner.userName}</span>
          <br />
          <span>description - {project.description}</span>
          </>
        );
      })}
    </div>
  );
};

export default MainContainer;
