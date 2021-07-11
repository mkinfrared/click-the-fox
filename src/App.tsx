import GameController from "components/GameController";
import Heading from "ui/Heading";

import css from "./App.module.scss";

const App = () => (
  <div className={css.App}>
    <main>
      <Heading className={css.heading} variant="h3">
        Click the fox! Game
      </Heading>
      <GameController />
    </main>
  </div>
);

export default App;
