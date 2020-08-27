import styled from "styled-components"
import {WithTag, mixins} from "../../lib/styled-components-layout"

export const Container = styled(WithTag)`
    ${mixins}
    width: 100%;
    margin: 0 auto;
    max-width: 1170px;
`