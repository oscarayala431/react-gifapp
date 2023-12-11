
export const GifItem = ({ title, url }) => {
  return (
    <>
        <li>
            <img src={url} alt={title} />
            <p>{ title }</p>
        </li>
    </>
  )
}