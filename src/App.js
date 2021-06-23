import React, { useState } from 'react';
import Expenses  from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 500.23,
    date: new Date(2021, 10, 28)
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 100.10,
    date: new Date(2020, 8, 13)
  },
  {
    id: 'e3',
    title: 'New Desk (Wooden)',
    amount: 300.13,
    date: new Date(2021, 3, 17)
  },
  {
    id: 'e4',
    title: 'New Tv',
    amount: 700.25,
    date: new Date(2021, 6, 2)
  },



];


function App() {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  
  return (
    <div className="titleTop">
      <h2>Expenses List</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  )

}

export default App;