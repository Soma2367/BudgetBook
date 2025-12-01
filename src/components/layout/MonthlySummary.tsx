import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import type { Transaction } from "../../types/transaction";
import { financeCalculations } from "../../utils/financeCalculations";
interface MonthlySummaryProps {
    monthlyTransactions: Transaction[],
}

const MonthlySummary = ({monthlyTransactions}: MonthlySummaryProps) => {
  console.log(monthlyTransactions);
  const {income, expense, balance} = financeCalculations(monthlyTransactions);

  return (
    <Grid container spacing={2} sx={{justifyContent: 'space-evenly'}}>
      <Stack
        direction="row"
        spacing={{xs: 1, sm: 2}}
        sx={{width: "100%", justifyContent: 'space-evenly'}}
        mb={2}
        display={"flex"}
      >
            <Card sx={{bgcolor: (theme) => theme.palette.incomeColor.main, color: 'white', borderRadius: '10px', flex: 1}}>
                <CardContent sx={{padding: {xs: 1, sm: 2}}}>
                    <Stack direction={"row"}>
                        <ArrowUpwardIcon sx={{ fontSize: "2rem" }}/>
                        <Typography>収入</Typography>
                    </Stack>
                    <Typography
                      textAlign={"right"}
                      variant="h5"
                      fontWeight={"fontWeightBold"}
                      sx={{wordBreak: "break-word", fontSize: {xs: ".8rem", sm: "1rem", md: "1.2rem"}}}>
                        { income }
                      </Typography>
                </CardContent>
            </Card>

            <Card sx={{bgcolor: (theme) => theme.palette.expenseColor.main, color: 'white', borderRadius: '10px', flex: 1}}>
                <CardContent sx={{padding: {xs: 1, sm: 2}}}>
                    <Stack direction={"row"}>
                        <ArrowDownwardIcon  sx={{ fontSize: "2rem" }}/>
                        <Typography>支出</Typography>
                    </Stack>
                    <Typography
                      textAlign={"right"}
                      variant="h5"
                      fontWeight={"fontWeightBold"}
                      sx={{wordBreak: "break-word", fontSize: {xs: ".8rem", sm: "1rem", md: "1.2rem"}}}>
                        { expense }
                      </Typography>
                </CardContent>
            </Card>

            <Card sx={{bgcolor: (theme) => theme.palette.balanceColor.main, color: 'white', borderRadius: '10px', flex: 1}}>
                <CardContent sx={{padding: {xs: 1, sm: 2}}}>
                    <Stack direction={"row"}>
                        <AccountBalanceIcon sx={{ fontSize: "2rem" }}/>
                        <Typography>残高</Typography>
                    </Stack>
                    <Typography
                      textAlign={"right"}
                      variant="h5"
                      fontWeight={"fontWeightBold"}
                      sx={{wordBreak: "break-word", fontSize: {xs: ".8rem", sm: "1rem", md: "1.2rem"}}}>
                        { balance }
                      </Typography>
                </CardContent>
            </Card>
       </Stack>
    </Grid>
  )
}

export default MonthlySummary;
