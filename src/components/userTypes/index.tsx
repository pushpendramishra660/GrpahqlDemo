import React, {useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {styles} from './styles';
import colors from '../../constants/colors';

type ButtonItem = {
  id: string;
  title: string;
};

interface UserTypesProps {
  data: ButtonItem[];
  onUserTypeSelection(type: string): void;
}

const UserTypes: React.FC<UserTypesProps> = ({data, onUserTypeSelection}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelect = (type: string) => {
    setSelectedValue(type);
    onUserTypeSelection(type);
  };

  const radioButtons: RadioButtonProps[] = data.map(item => ({
    id: item.id,
    label: item.title,
    value: item.title,
    color: colors.blue,
    containerStyle: {
      backgroundColor:
        item.id === selectedValue ? colors.lightBlue : colors.white,
      paddingLeft: 10,
      borderRadius: 5,
      width: '80%',
      paddingVertical: 10,
    },
  }));

  return (
    <RadioGroup
      containerStyle={styles.containerStyle}
      layout="column"
      radioButtons={radioButtons}
      selectedId={selectedValue}
      onPress={selectedID => {
        handleSelect(selectedID);
      }}
    />
  );
};

export default UserTypes;
