import PlayList from "../../components/playlist";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div
        style={{
          display: "flex",
          columnGap: "20px",
        }}
      >
        <PlayList />
      </div>
    </div>
  );
}

export default Home;
