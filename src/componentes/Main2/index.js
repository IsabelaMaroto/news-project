import styled from "styled-components"

const ContainerMain2 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30px;
    padding: 20px 30px 0;
    background-color: hsl(240, 100%, 5%);
    color: hsl(36, 100%, 99%);

    h3{
        font-size: 2em;
        color: hsl(35, 77%, 62%);
        font-weight: 700;
    }
    div{
        h5{
            font-size: 1em;
            font-weight: 700;
            margin-bottom: 10px;
            
            :hover{
                color: hsl(35, 77%, 62%);
                cursor: pointer;
            }
        }
        p{
            font-size: 15px;
            font-weight: normal;
            color: hsl(233, 8%, 79%);
            line-height: 150%;
            margin-bottom: 30px;
        }
    }
    .border-item{
        border-bottom: 1px solid hsl(233, 8%, 79%);
    }

    @media (max-width: 1400px){
        margin: 50px 0 0;

        h3{
            margin-bottom: 30px;
        }
        div{
            margin-bottom: 20px;
            p{
                margin-bottom: 20px;
            }
        }
    }
`

export function Main2(){
    return(
        <ContainerMain2>
            <h3>New</h3>
            <div className="border-item">
                <h5>Hydrogen VS Electric Cars</h5>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="border-item">
                <h5>The Downsides of AI Artistry</h5>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div>
                <h5>Is VC Funding Drying Up?</h5>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </ContainerMain2>
    )
}