type PostsDTO = {
  id: number;
  title: string;
  body: string;
};

async function FetchPosts() {
  const response = await fetch(
    "http://localhost:3001/api/posts"
  );

  const json: PostsDTO[] = await response.json();

  return json;
}

export default async function Home() {
  const posts = await FetchPosts();

  return (
    <main>
      <h1>Simple data fetcher in Next JS 14</h1>

      {posts.map((post: PostsDTO) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}
