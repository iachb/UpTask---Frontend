import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import { ProjectFormData } from "@/types/index";
import { EditProjectForm } from "@/components/projects/EditProjectForm";

type EditProjectFormProps = {
  data: ProjectFormData;
};

export default function EditProjectForm({ data }: EditProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: data.projectName,
      clientName: data.clientName,
      description: data.description,
    },
  });

  const handleForm = (formData: ProjectFormData) => {
    // Call the API to update the project
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Edit Project</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          Fill out the following form to create a project
        </p>
        <nav className="my-5">
          <Link
            to={"/"}
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          >
            Go back to Projects
          </Link>
        </nav>
        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm register={register} errors={errors} />

          <input
            type="submit"
            value="Create Proyect"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 
          text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
