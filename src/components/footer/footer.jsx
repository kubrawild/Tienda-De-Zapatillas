import "./footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="containerFooter"
        style={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        }}
      >
        <ul className="categories">
          <li style={{ color: "black" }}>Instagram</li>
          <li style={{ color: "black" }}>Twitter</li>
          <li style={{ color: "black" }}>Facebook</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
