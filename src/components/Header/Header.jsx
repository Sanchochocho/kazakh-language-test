import { useState } from "react";
import { Link } from "react-router";
import './Header.css'
const Header = () => {
    const [isContactOpen, setContactOpen] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container header-inner">
                    <h1 className="logo">Бағдарламалау тарихы</h1>
                    <nav>
                        <ul className="nav-list">
                            <Link to={"/"} className="link_main">Негізгі</Link>
                            <Link to={"/test"} className='link_test'>Сынақ</Link>
                            <Link to={"/test_history"} className='link_result'>Нәтижелер</Link>
                            <button onClick={() => setContactOpen(true)}>Байланыс</button>
                        </ul>
                    </nav>
                </div>
            </header>
            {isContactOpen && (
                <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setContactOpen(false)}>
                    <div className="modal">
                        <h3>Байланыс</h3>
                        <p>
                            Орындаған: <br /> Ведянин Илья и Дуйсен Санжар <br /> Группа П-24-68Б
                        </p>
                        <button onClick={() => setContactOpen(false)}>Жабу</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;