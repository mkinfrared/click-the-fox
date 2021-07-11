import React, { memo, useCallback, useState } from "react";

import Game from "components/Game";
import Scores from "components/Scores";
import UserForm from "components/UserForm";

import css from "./GameController.module.scss";

const GameController = () => {
  const maxStep = 3;
  const [currentStep, setCurrentStep] = useState(2);

  const goToNextStep = useCallback(() => {
    const nextStep = (currentStep + 1) % maxStep;

    setCurrentStep(nextStep);
  }, [currentStep]);

  let step: React.ReactNode;

  switch (currentStep) {
    case 0:
      step = <UserForm onPlay={goToNextStep} />;

      break;
    case 1:
      step = <Game onTimeout={goToNextStep} />;

      break;
    case 2:
      return (
        <Scores
          onWelcomeClick={goToNextStep}
          onPlayClick={() => setCurrentStep(1)}
        />
      );
    default:
      step = <UserForm onPlay={goToNextStep} />;
  }

  return <div className={css.GameController}>{step}</div>;
};

export { GameController };

export default memo(GameController);
