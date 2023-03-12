import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import Icon from "@mui/material/Icon"
import Container from "@mui/material/Container"
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Outlet, Link, useLocation } from "react-router-dom"
import { type FC } from "preact/compat"

interface MenuListItemProps {
  href: string
  icon: string
  children: string
  selected?: boolean
}

const MenuListItem: FC<MenuListItemProps> = ({ href, icon, children, selected = false }) => (
  <MenuItem component={Link} to={href} selected={selected}>
    <ListItemIcon>
      <Icon>{icon}</Icon>
    </ListItemIcon>
    <ListItemText>
      <Typography variant="body2" color="text.secondary">{children}</Typography>
    </ListItemText>
  </MenuItem>
)

const MainLayout = () => {
  const { pathname } = useLocation()

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <MenuList>
            <MenuListItem href="/todos" icon="list" selected={pathname === '/todos'}>
              Todos
            </MenuListItem>
            <MenuListItem href="/employees" icon="people" selected={pathname === '/employees'}>
              Employees
            </MenuListItem>
          </MenuList>
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainLayout
