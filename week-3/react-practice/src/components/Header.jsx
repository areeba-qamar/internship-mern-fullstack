function Header(props) {
  return (
    <header>
      <h2>{props.logo}</h2>
      <nav>
        <a href="#">{props.nav1}</a> |{" "}
        <a href="#">{props.nav2}</a> |{" "}
        <a href="#">{props.nav3}</a>
      </nav>
    </header>
  );
}
export default Header;