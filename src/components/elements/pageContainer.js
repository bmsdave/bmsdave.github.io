import styled from 'react-emotion'
import {
  DEFAULT_WIDTH,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

const PageContainer = styled('div')`
  max-width: ${DEFAULT_WIDTH};

  ${DEFAULT_MEDIA_QUERY} {
  }
`

export default PageContainer
