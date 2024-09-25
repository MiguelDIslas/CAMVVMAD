import React from 'react';
import styled from 'styled-components/native';

import Item from './Item';
import Title from '../Text/Title';

interface TaskItemProps {
  title: string;
  onPress: () => void;
}

const TaskItemContainer = styled(Item)`
  /* Sombra para iOS */
  shadow-color: rgba(0, 0, 0, 0.2);
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.8;
  shadow-radius: 4px;

  /* Sombra para Android */
  elevation: 5;
`;

const TaskItem: React.FC<TaskItemProps> = ({title, onPress}) => {
  return (
    <TaskItemContainer onPress={onPress}>
      <Title>{title}</Title>
    </TaskItemContainer>
  );
};

export default TaskItem;
