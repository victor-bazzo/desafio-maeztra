import React from "react";
import logomz from "../../logo-maeztra-novo.png";
import "./index.scss";

function Header() {
  const categoryNavigator = [
    "Novidades",
    "Vestidos",
    "Roupas",
    "Sapatos",
    "Lingerie",
    "Acessórios",
    "OUTLET",
  ];

  const newCategory = categoryNavigator.map((item) => {
    return item;
  });

  const mobileMz = window.innerWidth < 768;

  return (
    <header className={`header ${mobileMz ? "mobile" : "desktop"}`}>
      {mobileMz ? (
        /* Conteúdo específico para mobile */
        <div>
          <div className="topbar">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </div>
          <div className="header-mobile">
            <div className="header-mobile-left">
              <div className="logo-mobile">
                <span className="menu-mobile"></span>
                <img src={logomz} alt="logo" />
              </div>
            </div>

            <div className="header-mobile-right">
              <div className="search-mobile">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8535 22.4395L16.8817 15.4677C18.204 13.8351 19 11.7597 19 9.50004C19 4.26175 14.7383 0 9.49999 0C4.2617 0 0 4.26175 0 9.50004C0 14.7383 4.26175 19.0001 9.50004 19.0001C11.7597 19.0001 13.8351 18.204 15.4677 16.8817L22.4395 23.8536C22.6348 24.0488 22.9513 24.0488 23.1467 23.8536L23.8536 23.1466C24.0488 22.9513 24.0488 22.6347 23.8535 22.4395ZM9.50004 17.0001C5.3643 17.0001 2.00002 13.6358 2.00002 9.50004C2.00002 5.3643 5.3643 2.00002 9.50004 2.00002C13.6358 2.00002 17.0001 5.3643 17.0001 9.50004C17.0001 13.6358 13.6358 17.0001 9.50004 17.0001Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="minicart-mobile">
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7682 23.2112L18.9441 5.84052C18.9059 5.47687 18.5993 5.20074 18.2337 5.20074H14.8052V4.41907C14.8052 1.98248 12.8227 0 10.3861 0C7.94937 0 5.96689 1.98248 5.96689 4.41907V5.20074H2.53842C2.17276 5.20074 1.86624 5.47687 1.82797 5.84052L0.00387816 23.2112C-0.017179 23.4124 0.0481897 23.6133 0.183505 23.7638C0.319003 23.9141 0.511996 24 0.714327 24H20.0576C20.2601 24 20.4531 23.9141 20.5884 23.7638C20.7241 23.6133 20.7893 23.4124 20.7682 23.2112ZM7.39548 4.41907C7.39548 2.7702 8.73709 1.42859 10.3861 1.42859C12.035 1.42859 13.3766 2.7702 13.3766 4.41907V5.20074H7.39548V4.41907ZM1.50754 22.5714L3.18167 6.62933H5.96689V8.20349C5.96689 8.5979 6.28678 8.91779 6.68119 8.91779C7.07559 8.91779 7.39548 8.5979 7.39548 8.20349V6.62933H13.3766V8.20349C13.3766 8.5979 13.6965 8.91779 14.0909 8.91779C14.4853 8.91779 14.8052 8.5979 14.8052 8.20349V6.62933H17.5904L19.2646 22.5714H1.50754Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Conteúdo específico para desktop */
        <div className="header">
          <div className="topbar">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </div>

          <div className="header-container">
            <div className="header-top">
              <div className="logo">
                <img src={logomz} alt="logo" />
              </div>
              <div className="search">
                <input
                  className="search-input"
                  placeholder="O que você busca?"
                />
                <button className="search-button">Buscar</button>
              </div>

              <div className="account">
                <div className="account-container">
                  <a href="!#" className="account-link">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.8 9.5C8.90312 9.5 8.47188 10 7 10C5.52812 10 5.1 9.5 4.2 9.5C1.88125 9.5 0 11.3813 0 13.7V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.7C14 11.3813 12.1187 9.5 9.8 9.5ZM12.5 14.5H1.5V13.7C1.5 12.2125 2.7125 11 4.2 11C4.65625 11 5.39687 11.5 7 11.5C8.61563 11.5 9.34062 11 9.8 11C11.2875 11 12.5 12.2125 12.5 13.7V14.5ZM7 9C9.48438 9 11.5 6.98438 11.5 4.5C11.5 2.01562 9.48438 0 7 0C4.51562 0 2.5 2.01562 2.5 4.5C2.5 6.98438 4.51562 9 7 9ZM7 1.5C8.65312 1.5 10 2.84687 10 4.5C10 6.15312 8.65312 7.5 7 7.5C5.34688 7.5 4 6.15312 4 4.5C4 2.84687 5.34688 1.5 7 1.5Z" fill="#353535"/>
                    </svg>
                    Minha Conta
                  </a>
                </div>
                <div className="account-container">
                  <a href="!#" className="account-link">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.367 1.15404C14.3033 -0.581202 11.1148 -0.320559 9.14037 1.68961C7.16591 -0.320559 3.97749 -0.584772 1.91377 1.15404C-0.771215 3.41414 -0.378464 7.09885 1.5353 9.05189L7.79788 15.4323C8.15493 15.7965 8.63337 16 9.14037 16C9.65095 16 10.1258 15.8001 10.4829 15.4359L16.7454 9.05546C18.6556 7.10242 19.0555 3.41771 16.367 1.15404ZM15.5244 7.84865L9.26177 14.2291C9.17608 14.3147 9.10467 14.3147 9.01898 14.2291L2.7564 7.84865C1.45318 6.52044 1.18897 4.00683 3.01704 2.46797C4.40595 1.30043 6.54822 1.47538 7.89071 2.84287L9.14037 4.11752L10.39 2.84287C11.7397 1.46824 13.8819 1.30043 15.2637 2.4644C17.0882 4.00326 16.8169 6.53115 15.5244 7.84865Z" fill="#353535"/>
                    </svg>
                    Minha Conta
                  </a>
                </div>
                <div className="account-container">
                  <a href="!#" className="account-link minicart">
                    Minha Conta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              {newCategory.map((item) => (
                <li className="nav-item">
                  <a className="nav-link" href={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
