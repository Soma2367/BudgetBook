import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoPage from './pages/NoPage';
import AppLayout from './components/common/AppLayout';
import { theme } from './theme/theme';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import type { Transaction } from './types/transaction.ts';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './lib/firebase';
import { format } from "date-fns";
import { formatMonth } from './utils/format.ts';


const App = () => {
     function isFireStoreError(e: unknown): e is {code: string, message: string} {
      return typeof e === 'object' && e !== null && "code" in e
     }

     const [transactions, setTransactions] = useState<Transaction[]>([]);
     const [currentMonth, setCurrentMonth] = useState(new Date());
     console.log(currentMonth);
     const thisMonth = format(currentMonth, "yyyy-MM");
     console.log(thisMonth);

     useEffect(() => {
      const fetchTransactions = async () => {
        try {
        const querySnapshot = await getDocs(collection(db, "transactions"));

        const transactionsData = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          } as Transaction
        });
        console.log(transactionsData);
        setTransactions(transactionsData);
       } catch(e) {
          if(isFireStoreError(e)) {
            console.error(e)
          } else {
            console.error('Firebase以外でのエラー',e)
          }
       }


      }
      fetchTransactions();
     }, []);

     const monthlyTransactions = transactions.filter((transaction) => {
      return transaction.date.startsWith(formatMonth(currentMonth));
     });

     console.log(monthlyTransactions);

     return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
               <Route path="/" element={<AppLayout/>}>
                 <Route index element={<Home monthlyTransactions={monthlyTransactions}/>}/>
                 <Route path="report" element={<Report />}/>
                 <Route path="*" element={<NoPage />}/>
               </Route>
          </Routes>
        </Router>
      </ThemeProvider>
     );
};

export default App;
