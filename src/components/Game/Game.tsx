import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "store";
import { addScore } from "store/reducers/users/reducer";
import { selectLastUser } from "store/reducers/users/selectors";
import Image from "ui/Image";
import { catApi } from "utils/api/catApi";
import { dogApi } from "utils/api/dogApi";
import { foxApi } from "utils/api/foxApi";

import css from "./Game.module.scss";
import { GameProps } from "./Game.type";

const Game = ({ onTimeout }: GameProps) => {
  const dogCount = 4;
  const catCount = 4;
  const secondsLimit = 30;
  const [currentScore, setCurrentScore] = useState(0);
  const [currentIteration, setCurrentIteration] = useState(0);
  const [imageSet, setImageSet] = useState<string[]>([]);
  const [timer, setTimer] = useState(secondsLimit);
  const lastUser = useAppSelector(selectLastUser);
  const dispatch = useDispatch();
  const images: string[] = [];

  const fetchDogImages = async () => {
    for (let i = 0; i < dogCount; i++) {
      // eslint-disable-next-line no-await-in-loop
      const { data } = await dogApi.get("/breeds/image/random");

      images.push(data.message);
    }
  };

  const fetchCatImages = async () => {
    for (let i = 0; i < catCount; i++) {
      // eslint-disable-next-line no-await-in-loop
      const { data } = await catApi.get("/v1/images/search");

      images.push(data[0].url);
    }
  };

  const fetchFoxImage = async () => {
    // eslint-disable-next-line no-await-in-loop
    const { data } = await foxApi.get("/floof/");

    images.push(data.image);
  };

  const fetchImages = async () => {
    try {
      await Promise.all([fetchDogImages(), fetchCatImages(), fetchFoxImage()]);

      setImageSet(images.sort(() => 0.5 - Math.random()));
    } catch (e) {}
  };

  const handleClick = (isFox: boolean) => () => {
    if (isFox) {
      setCurrentScore(currentScore + 1);
    }

    setCurrentIteration(currentIteration + 1);

    setImageSet([]);
  };

  const animals = imageSet.map((url, index) => {
    const isFox = /randomfox\.ca/.test(url);

    return (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={`${url}${index}`}
        className={css.image}
      >
        <Image
          loadHeight={200}
          loadWidth={200}
          src={url}
          onClick={handleClick(isFox)}
        />
      </div>
    );
  });

  useEffect(() => {
    fetchImages();
  }, [currentIteration]);

  useEffect(() => {
    if (timer <= 0) {
      dispatch(addScore({ name: lastUser?.name ?? "", score: currentScore }));

      onTimeout();

      return;
    }

    const timerId = setTimeout(
      () => setTimer((prevState) => prevState - 1),
      1000
    );

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  return (
    <div className={css.Game}>
      <div>
        <p>{currentScore}</p>
        <p>{timer}</p>
      </div>
      <div className={css.images}>{animals}</div>
    </div>
  );
};

export { Game };

export default memo(Game);
