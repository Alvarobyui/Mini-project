
export default function nav(args) {
  return (
    <nav>
      <ul>
        <li>
          <img src={args.data.photo} alt="Imagen" />
        </li>
      </ul>
    </nav>
  )
}
