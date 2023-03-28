import styled from 'styled-components'


export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: "#FFF";
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
}))``;

export const Container = styled.View`
    flex: 1;
    align-items: stretch;
    background-color: #FFF;
    padding: 20px;
    padding-top: 0;
    padding-bottom: 80px;
`;


