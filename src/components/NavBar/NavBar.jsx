import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  let rol = "user";
  return (
    <div>
      <>
        <div className="containerNavbar">
          <Link style={{ color: "beige" }} to="/">
            <img
              src="https://res.cloudinary.com/dm2v8xdbc/image/upload/v1719893820/image_t5wemr.webp"
              alt=""
              style={{
                width: "68px",
                height: "68px",
                objectFit: "cover",
                display: "flex",
              }}
            />
          </Link>
          <ul className="categories">
            <Link to="/">Todas</Link>
            <Link to="/category/Urbanas">Urbanas</Link>
            <Link to="/category/Deportivas">Deportivas</Link>
          </ul>
          {rol === "admin" && <Link to="/dashboard">Dashboard</Link>}
          <CartWidget />
        </div>
      </>
    </div>
  );
};
