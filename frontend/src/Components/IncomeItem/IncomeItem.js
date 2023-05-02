import React from 'react'
import styled from 'styled-components'
import { calender, dollar,comment,trash, money, freelance, stocks, users, bitcoin, card, yt, piggy, book, food, medical, tv, takeaway, clothing, circle } from '../../utils/icons';
import Button from '../Button/Button';

function IncomeItem({id,title,amount,date,description,category,deleteItem,indicatorColor,type}) {


    const categoryIcon = () =>{
        switch(category){
            case 'salary' :
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return stocks
            case 'stocks':
                return users
            case 'bitcoin' :
                return bitcoin
            case 'bank':
                return card
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }


  return (
    <IncomeStyled indicator={indicatorColor}>
        <div className='icon'>
            {type == 'Expense' ? expenseCatIcon() : categoryIcon()}
        </div>
        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
                <div className='text'>
                    <p>{dollar} 45</p>
                    <p>{calender} {date}</p>
                    <p>{comment} {description}</p>
                </div>
                <div className='btn-con'>
                    <Button icon={trash}
                    bpad={'1rem'}
                    bRad={'50%'}
                    bg={'var(--primary-green)'}
                    color={'#fff'}
                    iColor = {'#fff'}
                    hColor={'var(--color-green)'}
                    />
                </div>
            </div>
        </div>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    background : #FCF6F9;
    border : 2px solid #FFFFFF;
    box-shadow : 0px 1px 15px rgba(0,0,0,0,06);
    border-radius : 20px;
    padding:1rem;
    margin-bottom : 1rem;
    display : flex;
    align-items : center;
    gap : 1rem;
    width : 100%;
    color : #222260;
    .icon{
        width : 80px;
        height : 80px;
        border-radius : 20px;
        background : #F5F5F5;
        display: flex;
        align-items : center;
        justify-content : center;
        border : 2px solid #FFFFFF;
        i{
            font-size : 2.6rem
        }
    }
    .content{
        display : flex;
        flex:1;
        flex-direction : column;
        gap  : 0.2rem;
        h5{
            font-size : 1.3rem;
            padding-left : 2rem;
            position : relative;
            &::before{
                content : '';
                position : absolute;
                left : 0;
                top :50%;
                transform : translateY(-50%);
                width : 0.8rem;
                height : 0.8rem;
                border-radius : 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display : flex;
            align-items : center;
            justify-content : space-between;

        }
        .text{
            display : flex;
            gap :1.5rem;
            p{
                display : flex;
                align-items : center;
                gap : 0.5rem;
                color : var(--primary-color);
                opacity : 0.8;
            }
        }
    }
`;

export default IncomeItem
