import './App.css'
import styled from "styled-components";
import MyImage from './assets/Rectangle 1.png'
import {Box} from "./components/Box.styled.tsx";
import {Active, Button} from "./components/Active.styled.tsx";
function App() {


  return (
    <div>
      <Box>
      <Card>
        <img src={MyImage} alt={'Sunset'}></img>
          <div>
                <h1>Headline</h1>
          </div>
          <div>
              <p>Faucibus. Faucibus. Sit sit sapien  sit tempusrisu ut. Sit molestie ornare in venen.</p>
          </div>
          <Active>
              <Button type={"primary"}>See more</Button>
              <Button type={"secondary"}>Save bbb</Button>
          </Active>
      </Card>
          <Card>
              <img src={MyImage} alt={'Sunset'}></img>
              <div>
                  <h1>Headline</h1>
              </div>
              <div>
                  <p>Faucibus. Faucibus. Sit sit sapien  sit tempusrisu ut. Sit molestie ornare in venen.</p>
              </div>
              <Active>
                  <Button type={"primary"}>See more</Button>
                  <Button type={"secondary"}>Save</Button>
              </Active>
          </Card>
      </Box>
    </div>
  )
}

export default App

const Card=styled.div`
  border-radius: 15px;
  max-width: 300px;
  width: 100%;
  max-height: 350px;
  height: 100%;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px 10px 10px 10px;
  display: flex;
    flex-direction: column;
    gap: 20px;

    img {
        border-radius: 10px;
        max-width: 280px;
        width: 100%;
        max-height: 170px;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    h1 {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #000;
    }
    
    p {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 1.66667;
        color: #abb3ba;
    }
    div {
        padding-left: 10px;
        padding-right: 10px;
    }
`

