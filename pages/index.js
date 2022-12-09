import Header from "../src/components/Header";
import Main from "../src/components/Main";

export default function Home() {
  return (
    <div className="main-container">
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  )
}
