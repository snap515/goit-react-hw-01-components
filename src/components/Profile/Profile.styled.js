import styled from 'styled-components';
export const ProfileTag = styled.div`
  display: block; /* Отображение элементов вертикально */
  background-color: #1877f2; /* Синий цвет для фона карточки */
  padding: 20px;
  border-radius: 5px;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column; /* Отображение элементов вертикально */
  align-items: center;
  margin-bottom: 20px;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white; /* Белый цвет текста для имени */
`;

export const Tag = styled.p`
  font-size: 18px;
  color: white; /* Белый цвет текста для тэга */
  background-color: #1877f2; /* Синий цвет для фона тэга */
  padding: 5px 10px; /* Отступы для фона тэга */
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #65676b; /* Серый цвет для локации */
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column; /* Отображение элементов вертикально */
  align-items: center;
`;

export const StatItem = styled.li`
  text-align: center;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #333; /* Черный цвет текста для метки */
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
