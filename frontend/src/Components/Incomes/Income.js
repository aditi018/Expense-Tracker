import React,{useEffect} from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {

    const { addIncome,getIncome,incomes } = useGlobalContext();

    useEffect(()=>{
        getIncome();
    },[])

  return (
    <IncomeStyled>
        <InnerLayout>
        <h1>Incomes</h1>
        <div className='income-content'>
            <div className='form-container'>
            <Form />
            </div>
            <div className='incomes'>
                {incomes.map((income) =>{
                    const {_id,title,amount,date,category,description,type} = income;
                    return <IncomeItem key={_id} id={_id} title={title} description={description} amount={amount} category={category} indicatorColor="var(--color-green)" type={type}/>
                })}
            </div>
        </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow : auto;
    .income-content{
        display: flex;
        gap : 2rem;
        .incomes{
            flex : 1;
        }
    }
`;

export default Income
