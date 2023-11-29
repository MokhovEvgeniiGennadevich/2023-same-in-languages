export default async function GET() {
  const posts = [
    {
      id: 1,
      title: "First Post on this blog",
      body: "This is the body",
    },
    {
      id: 2,
      title: "Just seriously bussiness",
      body: "This is the body",
    },
    {
      id: 3,
      title: "I made a mistake",
      body: "This is the body",
    },
  ];

  return new Response(JSON.stringify(posts));
}
