import { ChangeEventHandler, memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "store";
import { addUser } from "store/reducers/users/reducer";
import { selectLastUser } from "store/reducers/users/selectors";
import Button from "ui/Button";
import Input from "ui/Input";
import Text from "ui/Text";

import css from "./UserForm.module.scss";
import { UserFormProps } from "./UserForm.type";

const UserForm = ({ onPlay }: UserFormProps) => {
  const dispatch = useDispatch();
  const lastUser = useAppSelector(selectLastUser);
  const [settingUser, setSettingUser] = useState(false);
  const [userName, setUserName] = useState(lastUser?.name || "");

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const { value } = event.target;

      setUserName(value);
    },
    []
  );

  const handleUsernameClick = useCallback(() => {
    setSettingUser(true);
  }, []);

  const handlePlayClick = useCallback(() => {
    dispatch(addUser({ name: userName, score: 0 }));

    onPlay();
  }, [dispatch, onPlay, userName]);

  return (
    <div className={css.UserForm}>
      <div>
        {lastUser && !settingUser ? (
          <Text className={css.username} onClick={handleUsernameClick}>
            Hello {lastUser.name}
          </Text>
        ) : (
          <Input label="Name:" onChange={handleChange} value={userName} />
        )}
      </div>
      <div>
        <Button onClick={handlePlayClick}>PLAY!</Button>
      </div>
    </div>
  );
};

export { UserForm };

export default memo(UserForm);
