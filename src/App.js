import "./App.css";
import Plan from "./components/plan.jsx";

const muteword = "grey";
function App() {
  return (
    <div className="App flex justify-evenly p-8 bg-cyan-300">
      {/* {DoneOutlineRoundedIcon} */}
      <Plan
        plans="FREE"
        price={0}
        user="Single User"
        storage="5GB Storage"
        domain="Free Subdomain"
        li1="tick"
        li5={"Cancel"}
        li6={"Cancel"}
        li7={"Cancel"}
        li8={"Cancel"}
        content4={muteword}
        content5={muteword}
      />
      <Plan
        plans="PLUS"
        price={9}
        user="5 Users"
        storage="50GB Storage"
        domain="Free Subdomain"
        li1={"tick"}
        li5={"tick"}
        li6={"tick"}
        li7={"tick"}
        li8={"Cancel"}
        content5={muteword}
      />
      <Plan
        plans="PRO"
        price={49}
        user="Unlimited Users"
        storage="150GB Storage"
        domain="Unlimited
      Free Subdomains"
        li1={"tick"}
        li5={"tick"}
        li6={"tick"}
        li7={"tick"}
        li8={"tick"}
      />
    </div>
  );
}

export default App;
