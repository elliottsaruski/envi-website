import { useEffect, useRef } from "react";

function TweetEmbed({ tweetId }) {
  const ref = useRef();

  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.createTweet(tweetId, ref.current, {
        theme: "dark", // or "light"
        dnt: true,
      });
    }
  }, [tweetId]);

  return <div ref={ref} />;
}

export default TweetEmbed;
