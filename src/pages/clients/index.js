import Link from "next/link";

export default function ClientsPage() {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          <Link href={"/clients/debadrita"}>Debadrita</Link>
        </li>
        <li>
          <Link href={"/clients/debadrita1"}>Debadrita1</Link>
        </li>
      </ul>
    </div>
  );
}
