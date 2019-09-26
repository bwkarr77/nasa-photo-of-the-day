import React from "react";

const Header = props => {
  const enterDate = () => {
    let todayDate = new Date();
    // let today = `${todayDate.getFullYear()}-${todayDate.getMonth() +
    //   1}-${todayDate.getDate()}`;
    console.log(`sometext: ${todayDate}`);
    try {
      // props.setTest(todayDate);
      console.log(`test: ${props.test}`);
      // console.log(test);
    } catch (err) {
      console.log(`Stuff and Things`);
    }
  };

  return (
    <header className="App-header">
      <h1>Nasa Pic of Day</h1>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <div className="input-fields">
        {/* // */}
        <form>
          <label>
            Search by Date:
            <input placeholder={`year`} />
            <input placeholder={`month`} />
            <input placeholder={`day`} />
            <button onClick={enterDate()}>Find Date Images</button>
          </label>
        </form>
        {/*  */}
      </div>
      {/* <p>{enterDate()}</p> */}
    </header>
  );
};

export default Header;
