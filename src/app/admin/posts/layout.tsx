export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl">Posts</h1>

      <section>
        <div>{children}</div>
      </section>
    </div>
  );
}
