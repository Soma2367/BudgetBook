import Box from "@mui/material/Box"
import MonthlySummary from "../components/layout/MonthlySummary"
import Calender from "../components/layout/Calender"
import TransactionMenu from "../components/layout/TransactionMenu"
import TransactionForm from "../components/layout/TransactionForm"

const Home = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <Box sx={{flexGrow: 1, bgcolor: ""}}>
        <MonthlySummary/>
        <Calender/>
      </Box>
      <Box>
        <TransactionMenu />
        <TransactionForm/>
      </Box>
    </Box>
  )
}

export default Home