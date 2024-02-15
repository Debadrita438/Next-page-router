import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Specific Project Page for a Specific Client</h1>
    </div>
  );
}
