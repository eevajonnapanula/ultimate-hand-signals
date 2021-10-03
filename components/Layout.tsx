const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Ultimate frisbee hand signals</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/signals">Signals</a>
            </li>
            <li>Quiz</li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
