import { employeesAtom } from "@/atoms"
import { Grid } from "@mui/material"
import { useAtomValue } from "jotai"
import Employee from "./Employee"

const Employees = () => {
  const employees = useAtomValue(employeesAtom)

  return (
    <Grid container spacing={2}>
      {employees.map(employee => (
        <Grid item xs={6}>
          <Employee {...employee} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Employees
