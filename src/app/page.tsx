export default async function Home() {
  const apiEndpoint = new URL('/api/now', process.env.VERCEL_URL || 'http://localhost:3000');
  const res = await fetch(apiEndpoint, { next: { tags: ['now'] } });
  const json = await res.json();

  return (
    <>
      <p>time: {json.now}</p>
      <p>string: {new Date(json.now).toDateString()} {new Date(json.now).toTimeString()}</p>
    </>
  )
}
