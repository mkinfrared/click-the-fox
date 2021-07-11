import { memo } from "react";

import { useAppSelector } from "store";
import { selectUsers } from "store/reducers/users/selectors";
import Button from "ui/Button";
import Table from "ui/Table";

import css from "./Scores.module.scss";
import { ScoresProps } from "./Scores.type";

const Scores = ({ onPlayClick, onWelcomeClick }: ScoresProps) => {
  const users = useAppSelector(selectUsers);

  const rows = [...users]
    .sort((a, b) => b.score - a.score)
    .map(({ name, score }, index) => [index + 1, name, score]);

  const headers = ["Rank", "Name", "Score"];

  return (
    <div className={css.Scores}>
      <Table rows={rows} headers={headers} />
      <div className={css.buttons}>
        <Button onClick={onWelcomeClick}>To Welcome Screen</Button>
        <Button onClick={onPlayClick}>PLAY!</Button>
      </div>
    </div>
  );
};

export { Scores };

export default memo(Scores);
