import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesp,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundCard>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDesp>
        We are sorry, the page you requested could not be found.
      </NotFoundDesp>
    </NotFoundCard>
  </NotFoundContainer>
)

export default NotFound
