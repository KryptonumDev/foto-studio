import {PortableTextInputProps} from 'sanity'
import styled from 'styled-components'

export default function CustomInput(props: PortableTextInputProps) {
  return (
    <Container>
      {props.renderDefault({
        ...props,
        initialActive: true,
      })}
    </Container>
  )
}

const Container = styled.div`
  [data-testid='pt-editor'][data-fullscreen='false'] {
    height: 100px;
  }
`
