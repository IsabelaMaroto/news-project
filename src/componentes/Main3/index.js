import img1 from "../../images/image-retro-pcs.jpg";
import img2 from "../../images/image-top-laptops.jpg";
import img3 from "../../images/image-gaming-growth.jpg";
import styled from "styled-components";

const ContainerMain3 = styled.section`
    display: flex;
    justify-content: space-between;
    

    .topic{
        display: flex;
        justify-content: space-between;
        img{
            height: 120px;
            padding-right: 20px;
        }
        .text{
            display: flex;
            flex-direction: column;
            
            h3{
                font-size: 2em;
                color: hsl(233, 8%, 79%);
                font-weight: 700;
                margin: 5px 0;
            }
            h5{
                font-weight: 700;
                color: hsl(240, 100%, 5%);
                margin: 10px 0;

                :hover{
                    color: hsl(5, 85%, 63%);
                    cursor: pointer;
                }
            }
            p{
                color: hsl(236, 13%, 42%);
                width: 230px;
                line-height: 140%;
                font-size: 15px;
            }
        }
    }

    @media (max-width: 1000px){
        flex-direction: column;
        margin-top: 30px;
        .topic{
            margin-bottom: 30px;
            justify-content: start;
            .text{
                p{
                    width: fit-content;
                }
            }
        }
        
    }
`

export function Main3(){
    return(
        <ContainerMain3>
            <div className="topic">
                <div>
                    <img src={img1} alt=""/>
                </div>
                <div className="text">
                    <h3>01</h3>
                    <h5>Reviving Retro PCs</h5>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="topic">
                <div>
                    <img src={img2} alt=""/>
                </div>
                <div className="text">
                    <h3>02</h3>
                    <h5>Top 10 Laptops of 2022</h5>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="topic">
                <div>
                    <img src={img3} alt=""/>
                </div>
                <div className="text">
                    <h3>03</h3>
                    <h5>The Growth of Gaming</h5>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </ContainerMain3>
    )
}