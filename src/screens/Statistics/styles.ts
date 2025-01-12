import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e5f0db;
`;

export const Header = styled.View`
  background-color: #e5f0db;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const TitlePercent = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: 32px;
  color: #1b1d1e;
  font-weight: bold;
`;

export const TextContent = styled.Text`
  font-size: 14px;
  color: #333638;
  font-family: 'Nunito_400Regular';
  text-align: center;
`;

export const Content = styled.View`
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
  margin-top: -16px;
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #1b1d1e;
  font-family: 'Nunito_700Bold';
  margin-bottom: 24px;
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;
