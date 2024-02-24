export function PopularNow() {
    return (
      <>
        <main className="main-popular">
          <h1 className="title-popular">Popular ahora</h1>
          <ul className="popular-ul">
            <div className="popular-flex">
              <li className="popular-li" id="popular-li">
                <a className="popular-a" href="/originals-forum">
                  <h1>forum</h1>
                </a>
              </li>
              <li className="popular-li" id="popular-li">
                <a className="popular-a" href="/terrex">
                  <h1>terrex</h1>
                </a>
              </li>
            </div>
            <div className="popular-flex">
              <li className="popular-li" id="popular-li">
                <a className="popular-a" href="/samba">
                  <h1>samba</h1>
                </a>
              </li>
              <li className="popular-li" id="popular-li">
                <a className="popular-a" href="/river">
                  <h1>river</h1>
                </a>
              </li>
            </div>
            <div className="popular-flex">
              <li className="popular-li" id="popular-li">
                <a className="popular-a" href="/campus">
                  <h1>campus</h1>
                </a>
              </li>
              <li className="popular-li" id="popular-li">
                <a className="popular-a" href="/zapatillas">
                  <h1>zapatillas -</h1>
                </a>
              </li>
            </div>
          </ul>
        </main>
      </>
    );
  }