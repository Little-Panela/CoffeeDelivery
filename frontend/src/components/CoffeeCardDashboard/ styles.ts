import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 300px;
/* height: 310px; */
  background: ${({ theme }) => theme['gray-100']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  text-align: center;
  margin-top: 3rem;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -5rem;
  }
`

// export const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 4px;
//   margin-top: 1rem;
//   margin-bottom: 1.25rem;
//   flex-wrap: wrap;
//   span {
//     background: ${({ theme }) => theme.colors['brand-yellow-light']};
//     color: ${({ theme }) => theme.colors['brand-yellow-dark']};
//     font-size: ${({ theme }) => theme.textSizes['components-tag']};
//     text-transform: uppercase;
//     padding: 0.25rem 0.5rem;
//     border-radius: 999px;
//     font-weight: 700;
//   }
// `

export const Name = styled.strong`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    p {
      line-height: 0.75rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 8rem;
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme['purple-700']};
    color: ${({ theme }) => theme['gray-100']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${({ theme }) => theme['purple-500']};
    }
  }
`