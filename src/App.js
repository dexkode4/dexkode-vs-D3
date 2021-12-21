import "./App.css";
import { MouseTracker } from "./views/MouseTracker";
import { CssColorDataVis } from "./views/CssColorDataVis";
import { viz } from "./vis";
import { fetchData } from "./API";
import { PopulationDataVis } from "./views/PopulationDataVis";

function App() {
  const dark = "#3e3c38"
  const config = {
    axis: {
      domain: false,
      tickcolor: 'lightGray'
    },
    style: {
      "guide-label":{
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark,
        labelLimit: 0
      }
    }
  }

   const run = async () => {
    const marks = viz.data(await fetchData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({type: 'fit', contains: 'padding'})
    .config(config);

    document.body.appendChild(await marks.render())
  }
 
  return (
      // <Smileyface/>
    //  <div>
    //    {run()[0]}
    //  </div>
      // <MouseTracker/>
      // <CssColorDataVis/>
      <PopulationDataVis/>
  );
}

export default App;
