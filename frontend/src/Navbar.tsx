import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
const datas = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "About",
    link: "/about",
  },
];
export default function Navbar() {
  const pathName = useLocation().pathname;
  return (
    <nav>
      {datas.map((data) => (
        <Link key={data.link} to={data.link} className={pathName === data.link ? "active" : ""}>{data.page}</Link>
      ))}
    </nav>
  );
}
