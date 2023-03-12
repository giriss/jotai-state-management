import { Icon, IconButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material"
import { type FC, useRef, useState, useCallback } from "preact/compat"

interface EmployeeDropdownProps {
  onDelete: VoidFunction
}

const EmployeeDropdown: FC<EmployeeDropdownProps> = ({ onDelete }) => {
  const menuButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])
  const handleDelete = useCallback(() => {
    setIsOpen(false)
    onDelete()
  }, [onDelete])

  return (
    <>
      <IconButton ref={menuButtonRef} onClick={handleOpen}>
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu open={isOpen} anchorEl={menuButtonRef.current} onClose={handleClose}>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <Icon>delete</Icon>
          </ListItemIcon>
          <Typography variant="button" noWrap>
            Delete
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default EmployeeDropdown
