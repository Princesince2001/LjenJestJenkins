import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello Keerthivasan</h1>

      <div>
        <h2>Simple calculator program</h2>
        <label data-testid="Fieldone">enter the number1</label>
        <input type="text" data-testid="textone"></input>
        <br></br>
        <label data-testid="Fieldtwo"> enter the number2</label>
        <input type="text" data-testid="texttwo"></input>
        <br></br>
        <label data-testid="Fieldthree">enter the number3</label>
        <input type="text" data-testid="textthree"></input>
        <br></br>
        <input type="button" data-testid="buttontest" value="submit"></input>
      </div>
    </div>
  );
}

export default App;
