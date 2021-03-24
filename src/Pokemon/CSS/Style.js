import { css } from '@emotion/css'

const color = 'white'
const light_gray = '#bababa'

export const divData = css`
    width: 50%;
    padding: 15px 20px;
    a {
        text-decoration: none;
    }
`

export const pData = css`
    padding: 10px;
    color: white;
    background-color: gray;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: 2px 3px 8px ${light_gray};
    &:hover {
        color: ${color};
    }
`