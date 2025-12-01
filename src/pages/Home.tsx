import Box from "@mui/material/Box"
import MonthlySummary from "../components/layout/MonthlySummary"
import Calender from "../components/layout/Calender"
import TransactionMenu from "../components/layout/TransactionMenu"
import TransactionForm from "../components/layout/TransactionForm"
import type { Transaction } from "../types/transaction.ts";

interface HomeProps {
  monthlyTransactions: Transaction[],
}

const Home = ({monthlyTransactions}: HomeProps) => {
  return (
    <Box sx={{display: 'flex'}}>
      <Box sx={{flexGrow: 1, bgcolor: ""}}>
        <MonthlySummary monthlyTransactions={monthlyTransactions}/>
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