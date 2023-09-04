export default async function Home() {
  const res = await fetch('https://now-api-mu.vercel.app/', { next: { tags: ['now'] } });
  const json = await res.json();

  return (
    <>
      <p>time: {json.now}</p>
      <p>string: {new Date(json.now).toDateString()} {new Date(json.now).toTimeString()}</p>
    </>
  )
}
