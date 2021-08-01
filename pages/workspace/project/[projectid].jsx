import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { projectid } = router.query;

  return <p>Post: {projectid}</p>;
};

export default ProjectPage;
