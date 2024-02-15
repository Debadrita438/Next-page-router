import { useRouter } from "next/router";

export default function ClientsProjectPage() {
  const router = useRouter();

  const loadProjectHandler = () => {
    // router.push("/clients/debadrita/projecta");
    // or
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "debadrita", clientProjectId: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Specific Client Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
