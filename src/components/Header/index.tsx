import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'

import { Container } from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  size?: 'small' | 'large'

  toggleTheme(): void
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  toggleTheme,
}: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container size={size}>
      <header>
        <Link to="/">
          <img src={Logo} alt="GoFinances" />
        </Link>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={colors.color}
          onColor={colors.color}
          offHandleColor={colors.color}
          onHandleColor={colors.color}
        />
        <nav>
          <Link to="/">Listagem</Link>

          <Link to="/import">Importar</Link>
        </nav>
      </header>
    </Container>
  )
}

export default Header
