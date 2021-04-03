import { Checkbox } from 'antd';
import { FC } from 'react';
import { NamesProps } from './interfaces';
import {
  NameEntryStyled,
  NamesContentStyled,
  UserOutlinedStyled,
} from './styles';

export const Names: FC<NamesProps> = ({ names, setNames }) => {
  const onSelectionChange = (checkedValues: any[]) => {
    setNames(checkedValues);
  };

  return (
    <NamesContentStyled>
      <Checkbox.Group defaultValue={names} onChange={onSelectionChange}>
        {names.map((name) => (
          <NameEntryStyled key={name}>
            <Checkbox value={name}>{name}</Checkbox>
            <UserOutlinedStyled />
          </NameEntryStyled>
        ))}
      </Checkbox.Group>
    </NamesContentStyled>
  );
};
