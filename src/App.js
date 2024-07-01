import "./App.css";
import Barry from "./otters/otter1.jpg";
import Domnan from "./otters/otter2.jpg";
import Seljul from "./otters/otter3.jpg";
import Domfa from "./otters/otter4.jpg";
import Julfa from "./otters/otter5.jpg";
import Header from "./components/Header";
import PostList from "./components/PostList";
import SelectedItem from "./components/SelectedItem";
import { useState } from "react";

function App() {
  const [selectedPost, setSelectedPost] = useState({
    id: 1,
    src: Barry,
    title: "Barry",
  });

  function handleClick(otter) {
    setSelectedPost(otter);
  }
  const ottersArray = [
    { id: 1, src: Barry, title: "Barry" },
    { id: 2, src: Domfa, title: "Domfa" },
    { id: 3, src: Domnan, title: "Domnan" },
    { id: 4, src: Seljul, title: "Seljul" },
    { id: 5, src: Julfa, title: "Julfa" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <ul className="post-list">
          {ottersArray.map((otter) => {
            return (
              <PostList
                key={otter.id}
                id={otter.id}
                src={otter.src}
                title={otter.title}
                onSelect={handleClick}
              />
            );
          })}
        </ul>
        <SelectedItem src={selectedPost?.src} title={selectedPost?.title} />
      </div>
    </div>
  );
}

export default App;
