import React from 'react';

export const IncomeItem = ({ deleteIncome, incomeItem, incomeText, incomeAmount, thisMonth, selectedMonth}) => {

  const deleteHandler = () => {
    deleteIncome(incomeItem.docId);
  }

  const showThisMonth = () => {
    return (
      <li className="thisMonthList income-list">
      <div className="text">{incomeText}</div>
      <div className="money-plus">+{Number(incomeAmount).toLocaleString()}円</div>
      <button className="delete-btn" onClick={deleteHandler}>×</button>
      </li>
    )
  }

  const showPastMonth = () => {
    return (
      <li>
      <div className="text">{incomeText}</div>
      <div className="money-plus">+{Number(incomeAmount).toLocaleString()}円</div>
      </li>
    )
  }

  return (
    <>
      {thisMonth === selectedMonth ? showThisMonth() : showPastMonth()}
    </>
  )
}