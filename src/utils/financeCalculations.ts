import type { Balance, Transaction } from "../types/transaction";

export function financeCalculations(transactions: Transaction[]): Balance {
    return transactions.reduce((accumulator, transaction) => {
        if(transaction.type == "income") {
            accumulator.income += transaction.amount;
        } else {
            accumulator.expense += transaction.amount;
        }
        accumulator.balance = accumulator.income - accumulator.expense;

        return accumulator;
    }, {income: 0, expense: 0, balance: 0});
}