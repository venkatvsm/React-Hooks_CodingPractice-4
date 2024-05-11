// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  Para,
  Image,
  Description,
  ButtonEl,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [showtext, toChangeText] = useState(false)
  const onClickReadmore = () => {
    toChangeText(prevState => !prevState)
  }
  return (
    <BgContainer>
      <CardContainer>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{showtext ? reactHooksDescription : reactHooksDescription.slice(0, 170)}</Description>
        <ButtonEl type="button" onClick={onClickReadmore}>
          {showtext ? 'Read Less' : 'Read More'}
        </ButtonEl>
      </CardContainer>
    </BgContainer>
  )
}
export default ReadMore
