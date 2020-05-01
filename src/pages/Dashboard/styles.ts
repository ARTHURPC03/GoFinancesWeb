import styled from 'styled-components'

interface CardProps {
  total?: boolean
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#333')};
  padding: 22px 32px;
  border-radius: 5px;
  color: #fff;

  transition: all 0.2s ease 0s;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  &:hover {
    transform: translate3d(42px, -62px, -135px);
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.theme.colors.border};
    border-image: initial;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: ${props => props.theme.colors.color};
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: ${props => props.theme.colors.backgroundFile};
      font-size: 16px;
      font-weight: normal;
      color: ${props => props.theme.colors.color};

      &.title {
        color: ${props => props.theme.colors.color};
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`
