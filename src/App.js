import "./App.css";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import SideBody from "./Components/SideBody";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('file:///D:/Aditi%20Photos%20and%20Sign/programming/Payment%20Page/payment/src/bg.svg')] bg-cover bg-no-repeat">
        <div className="flex space-x-96">
          <SideBody />
          <Payment />
        </div>
      </div>
    </>
  );
}

export default App;
