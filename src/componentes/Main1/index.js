import styled from "styled-components"
import ImgPricipal from "../../images/image-web-3-desktop.jpg"
import ImgSX from "../../images/image-web-3-mobile.jpg"

const ContainerMain1 =styled.section`
    #img{
        img{
            height: 300px;
            margin-bottom: 20px;
        }
    }
    #imgMobile{
        display: none;
        img{
            width: 375px;
        }
    }
    .text{
        display: flex;
        justify-content: space-between;
        .title{
            width: 300px;
            
            h2{
                font-weight: 800;
                font-size: 3em;
                color: hsl(240, 100%, 5%);
            }
        }
        .article{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                width: 350px;
                font-size: 15px;
                line-height: 140%;
                color: hsl(236, 13%, 42%);
            }
            button{
                width: 150px;
                padding: 10px;
                color: rgba(255,255,255,1.0);
                text-transform: uppercase;
                background-color: hsl(5, 85%, 63%);
                border: none;
                letter-spacing: 3px;

                :hover{
                    background-color: hsl(240, 100%, 5%);
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 1000px) {
        #img{
            display: none;
        }
        #imgMobile{
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            img{
                width: 99%;
            }
        }
       .text{
        flex-direction: column;
            h2{
                margin-bottom: 20px;
            }
       }
       .article{
        p{
            margin-bottom: 20px;
        }
       }
    }
`

export function Main1() {
    return (
        <ContainerMain1>
            <div  id="img">
                <img src={ImgPricipal} alt="formas geométricas coloridas" />
            </div>
            <div  id="imgMobile">
                <img src={ImgSX} alt="formas geométricas coloridas"/>
            </div>
            <div className="text">
                <div className="title">
                    <h2>The Bright Future of Web 3.0?</h2>
                </div>
                <div className="article">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <button>Read more</button>
                </div>
            </div>
        </ContainerMain1>
    )
}