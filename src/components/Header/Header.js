import "./Header.css";

const Header = () => {
  return (
    <span style = {{fontWeight: "bold"}} onClick={() => window.scroll(0, 0)} className="header">
      🎬 Telly Corner 🎬
    </span>
  );
};

export default Header;
