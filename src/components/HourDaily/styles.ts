import { View } from 'react-native';
import styled from 'styled-components/native'
import {HourDailyProps} from './index'


export const Container = styled.View`
border-radius: 6px;
width: 327px;
border-color: #DDDEDF;
border-width: 1px;
border-radius: 6px;
margin-top: 10px;
`;

export const HourContainer = styled.View`
align-items: center;
height: 49px;
margin-left: 10px;
flex-direction: row;
`;

export const HourText = styled.Text`
font-size: 12px;
font-family: 'Nunito_700Bold';
color: #1B1D1E;
`;
export const ContentText = styled.Text`
font-family: 'Nunito_400Regular';
font-size: 16px;
`;

export const Line = styled.View`
width: 1px;
background-color:#B9BBBC ;
height: 14px;
align-items: center;
margin-left: 10px;
margin-right: 10px;
`;

export const Status = styled(View)<HourDailyProps>`
width: 14px;
height: 14px;
background-color: ${props => props.status ? '#F3BABDA6' : '#CBE4B4'};
border-radius: 50%;
margin-left: 180px;
`;