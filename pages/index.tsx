import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.useQuery(["hello", { text: "your mom" }]);
  const user = trpc.useQuery(["user", { id: 1 }]);

  if (!user.data || !hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      <p>
        {user.data.name} ({user.data.id})
      </p>
    </div>
  );
}
