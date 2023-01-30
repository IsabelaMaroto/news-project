import styled from "styled-components";
import { Main1 } from "../Main1";
import { Main2 } from "../Main2";
import { Main3 } from "../Main3";

const Main= styled.main`
    display: flex;
    flex-direction: column;
    .top{
        display: flex;
        padding: 50px 0;
    }
    .bottom{

    }
@media (max-width: 1400px) {
    padding: 0 20px;
    .top{
        flex-direction: column;
        padding: 10px 0;
    }
}
`

export function Body(){
    return(
        <Main>
            <div className="top">
                <Main1/>
                <Main2/>
            </div>
            <div className="bottom">
                <Main3/>
            </div>
        </Main>
    )
}