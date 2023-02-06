import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "react-query";
import Marquee from "react-fast-marquee";
import { BottomNavigation, Typography } from "@mui/material";

import Context from "../../context";
import { getRandomNumber } from "../../helpers";

const newsAPIkey = "643f8683177746339b32fd2f0228d1db";

const RandomNews = () => {
  const { showRandomNews } = useContext(Context);

  const [newsText, setNewsText] = useState("");

  useQuery(
    "repoData",
    () => {
      const data = fetch(
        `https://newsapi.org/v2/everything?q=everything&pageSize=1&page=${getRandomNumber()}&getRandomNumber&apiKey=${newsAPIkey}`
      )
        .then((res) => res.json())
        .then((data) => setNewsText(data?.articles?.[0]?.description));
      return data;
    },
    { enabled: showRandomNews }
  );

  useEffect(() => {
    if (!showRandomNews) {
      setNewsText("");
    }
  }, [showRandomNews]);

  return (
    <>
      <BottomNavigation>
        {showRandomNews && newsText && (
          <Marquee speed={40} gradient={false}>
            <Typography>{newsText}</Typography>
          </Marquee>
        )}
      </BottomNavigation>
    </>
  );
};

export default RandomNews;
