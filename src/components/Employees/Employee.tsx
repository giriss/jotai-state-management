import { type Employee, employeesAtom } from "@/atoms"
import { MONTHS } from "@/lib/types"
import { Avatar, Card, CardActions, CardContent, CardHeader, Icon, IconButton, Typography } from "@mui/material"
import { useSetAtom } from "jotai"
import { type FC, useMemo, useCallback } from "preact/compat"
import EmployeeDropdown from "./EmployeeDropdown"

const Employee: FC<Employee> = ({ id, name, dob, gender, isFavorite }) => {
  const setEmployees = useSetAtom(employeesAtom)
  const initial = useMemo(() => name[0], [name[0]])
  const avatarColor = useMemo(
    () => ({ bgcolor: gender === 'male' ? '#88adf7' : '#ff8fc5' }),
    [gender]
  )
  const dateOfBirth = useMemo(
    () => `${MONTHS[dob.getMonth()]} ${dob.getDate()}, ${dob.getFullYear()}`,
    [dob.getTime()]
  )
  const removeEmployee = useCallback(() => {
    setEmployees(employees => employees.filter(employee => employee.id !== id))
  }, [id])
  const toggleFavorite = useCallback(() => {
    setEmployees(employees => {
      const employee = employees.find(employee => employee.id === id)
      if (!employee) return

      employee.isFavorite = !employee.isFavorite
    })
  }, [id])

  return (
    <Card>
      <CardHeader
        title={name}
        subheader={dateOfBirth}
        avatar={
          <Avatar sx={avatarColor}>{initial}</Avatar>
        }
        action={<EmployeeDropdown onDelete={removeEmployee} />}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name} is a {gender} employee
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={toggleFavorite}>
          <Icon>{isFavorite ? 'favorite' : 'favorite_border'}</Icon>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Employee
