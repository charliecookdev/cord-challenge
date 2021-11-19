import { useEffect, useState } from "react";
import StoryGrid from "./Containers/StoryGrid";
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        // Obviously wouldn't have an API key exposed like this in a front end app but used for demo purposes
        const response = await fetch(
          "https://gnews.io/api/v4/top-headlines?lang=en&token=c980452d8fe909b1186676944b80e337"
        );
        const { articles } = await response.json();

        setArticles(articles);
      } catch (error) {
        setError(error)
      }
    };

    fetchNewsArticles();
  }, []);

  if (error) {
    return <h1>Oops looks like something went wrong: {error}</h1>
  }

  return <StoryGrid articles={articles} />;
}

export default App;
