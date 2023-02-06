import {TouchableHighlightProps} from 'react-native'
import {Container, Title} from './styles'

type ButtonProps = TouchableHighlightProps & {
    title: string
}

export function Button({title, ...rest}: ButtonProps) {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}
