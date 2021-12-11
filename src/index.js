import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
mongoose.connect(
  "mongodb+srv://Tharaa:ozQdDcMC8R64qMqy@cluster0.mydt7.mongodb.net/Data",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
ReactDom.render(<App />, document.getElementById("root"));
