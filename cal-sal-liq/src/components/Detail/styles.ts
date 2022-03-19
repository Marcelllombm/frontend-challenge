import styled from 'styled-components';
import bgResult from '../../assets/bg.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentBox = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
        font-size:2.25rem;
        font-weight: 300;
        line-height: 42.19px;
    }
    .result{
        font-size: 3rem;
        color: var(--green);
        line-height: 56.25px;
        font-weight: 600px;
        background-image: url(${bgResult});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 401px;
        height: 125px;
        margin-left: 10px;
        padding: 30px 0;

        span{
            font-size: 1.5rem;
            font-weight: 500;
            font-style: normal;
            line-height: 28.13px;
            vertical-align: middle;
            font-family: Roboto;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    table{
        border-spacing: 0;
    }
    
    h3{
        margin-top:74px;
        margin-bottom: 54px;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 28.13px;
        text-align: center;
    }

    tr{
        font-size: 1.5rem;
        line-height: 28.13px;
        font-weight: 400;
    }
    td:nth-child(odd){
        text-align: left;
        padding: 10px 80px 10px 0  ;
        
    }
    td:nth-child(even){
        text-align: right;
        
    }
    .bold{
        font-weight: 600;
        border-top: 1px solid white;
    }
    .lineTop{
        border-top: 1px solid white;
    }
   
`;