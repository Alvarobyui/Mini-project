
export default function nav(args) {
  return (
    <nav>
      <ul>
        <li>
          <img src={args.data[0].photo} alt="Imagen" />
        </li>
      </ul>
    </nav>
  )
}
