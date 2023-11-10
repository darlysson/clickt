
export default function Clients({ params }: { params: { slug: string } }) {

  return (
    <div>{params.slug}</div>
  )
}
