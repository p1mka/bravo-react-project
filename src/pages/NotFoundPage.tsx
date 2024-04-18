import { Link } from "react-router-dom"

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h1>Страница не найдена...</h1>
      <Link to="">Вернуться назад...</Link>
    </>
  )
}

export default NotFoundPage
