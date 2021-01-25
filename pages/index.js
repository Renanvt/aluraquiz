import styled from 'styled-components'

const Title = styled.h1 `
font-size: 50 px;
color: $ {
({ theme }) => theme.colors.secondary
};
`

/*
function Title(props) { //propcidades / propriedades
    return (
    <h1 >
        {props.children} 
    </h1>
    )
}
*/

export default function Home() {
    return <Title> My page </Title>
}