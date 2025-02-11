import axios from "axios";
import logo from "../images/logo.png";

export default function Home() {
  const apiTest = async () => {
    const response = await axios.get<string>("/api/test");
    if (response.data) {
      alert(response.data);
    }
  };

  return (
    <>
      <img src={logo} height="300px" />
      <button onClick={() => apiTest()}>API 테스트</button>
    </>
  );
}
