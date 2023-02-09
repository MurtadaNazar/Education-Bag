import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link href="/">
        <h3 className="text-2xl c">المهندس ايمن سعد</h3>
      </Link>
      <nav ref={navRef}>
        <Link className="Link" href="/">
          الرئيسية
        </Link>
        <Link className="Link" href="/#">
          المناهج الدراسية
        </Link>
        <Link className="Link" href="/#">
          الكورسات العلمية
        </Link>
        <Link className="Link" href="/#">
          البحوث العلمية
        </Link>
        <Link className="Link" href="/#">
          الكتب المترجمة
        </Link>
        <Link className="Link" href="/#">
          المشاركات
        </Link>
        <Link className="Link" href="/#">
          من انا
        </Link>
        <Link className="Link" href="/#">
          تواصل معي
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
