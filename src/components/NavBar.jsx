const NavBar = () => {

  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const navbg = document.querySelector('.nav-bg');
  
  menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
      navbg.classList.toggle('active');
  });

    return (
      <>
      <header className="header">
        <a href="#" className="logo">Logo</a>

        <i className='bx bx-menu' id="menu-icon"></i>

        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    <div className="nav-bg"></div>
      </>
    )
}

export default NavBar