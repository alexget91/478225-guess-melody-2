import * as React from "react";
import AuthorizationForm from "../authorization-form/authorization-form";
import ReplayButton from "../replay-button/replay-button";
import {User} from "../../common/types";

interface Props {
  user: User,
  onReplayClick: () => void,
  onAuthFormSubmit: () => void,
}

const WinScreen = (props: Props) => {
  const {user, onReplayClick, onAuthFormSubmit} = props;
  const cssClass = user ? `result` : `login`;

  return <section className={cssClass}>
    <div className={`${cssClass}__logo`}><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <h2 className={`${cssClass}__title`}>Вы настоящий меломан!</h2>
    <p className={`${cssClass}__total`}>За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
    {user
      ? <p className="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
      : <React.Fragment>
        <p className="login__text">Хотите сравнить свой результат с предыдущими попытками? Представьтесь!</p>
        <AuthorizationForm onFormSubmit={onAuthFormSubmit}/>
      </React.Fragment>}
    <ReplayButton text={`Сыграть ещё раз`} onClick={onReplayClick}/>
  </section>;
};

export default WinScreen;
