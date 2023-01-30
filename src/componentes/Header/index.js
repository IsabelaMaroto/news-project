import logo from "../../images/logo.svg"
import styled from "styled-components"

const ContainerHeader = styled.header`
    height: auto;
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;

    .logo{
        img{
            height: auto;
        }
    }
    .links{
        display: flex;
        justify-content: space-around;
        
        li{
            margin: 0 20px;
            
            a{
                color: hsl(240, 100%, 5%);
                text-decoration: none;

                :hover{
                    color: hsl(5, 85%, 63%);
                }
            }
        }
    }
    .offcanvas{
        background-color: hsl(36, 100%, 99%);
        width: 60%;
    }
    #containerX{
        display: flex;
        justify-content: end;
    }
    #containerList{
        display: flex;
        margin-top: 30px;
        ul{
            li{
                margin-bottom: 30px;
                a{
                    color: hsl(240, 100%, 5%);
                    text-decoration: none;
                    font-weight: 400;
                    font-size: 1em;

                    :hover{
                    color: hsl(5, 85%, 63%);
                }
                }
            }
        }
    }
    @media (max-width: 1000px) {
        padding: 10px;
    }
`

export function Header() {
    return (
        <ContainerHeader>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav , staticBackdrop" aria-expanded="false" aria-label="Alterna navegação" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end collapse" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header" id="containerX" >
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" id="X"></button>
                    </div>
                    <div className="offcanvas-body" id="containerList">
                        <ul>
                            <li>
                                <a href="/#">Home</a>
                            </li>
                            <li>
                                <a href="/#">New</a>
                            </li>
                            <li>
                                <a href="/#">Popular</a>
                            </li>
                            <li>
                                <a href="/#">Trending</a>
                            </li>
                            <li>
                                <a href="/#">Categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="links" id="navbarNav">
                        <li>
                            <a href="/#">Home</a>
                        </li>
                        <li>
                            <a href="/#">New</a>
                        </li>
                        <li>
                            <a href="/#">Popular</a>
                        </li>
                        <li>
                            <a href="/#">Trending</a>
                        </li>
                        <li>
                            <a href="/#">Categories</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </ContainerHeader>
    )
}