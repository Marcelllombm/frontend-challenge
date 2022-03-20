import styled from 'styled-components';

export const Container = styled.section`
    margin:0 20px;
`;

export const Context = styled.div`

form{
    display: flex;
    justify-content:space-evenly;    
    margin: 0 auto;
    margin-top: 61px;

    label{
            margin-right:12px;
            text-align: left;
            h3{
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 28.13px;
            }
            input{
                margin-top: 15px;
                margin-bottom: 13px;
                width: 242px;
                height: 67px;
                border-radius: 0 50px 50px 0;
                border: none;
                font-weight:400;
                outline: none;
                padding-left: 60px ;
                font-size: 1.5rem;
                line-height: 28.13px;
            }
            input[type=number]::-webkit-inner-spin-button { 
                width: 0;
                height: 0;
                cursor: none;
            }
            .cifrao{
                background: var(--gray);
                font-size: 1.5rem;
                width: 60px;
                height: 67px;
                color: var(--textcifra);
                font-weight: 500;
                border-radius: 50px 0 0 50px;
                font-size: 1.5rem;
                line-height: 28.13px;
                padding: 19.5px 20px;
                border: none;
            }
            input:nth-last-child(3){
                width: 96px;
                padding-left: 40px ;
                border-radius: 50px;
            }
            h6{
                font-size: 1rem;
                font-weight: 300;
                line-height: 18.75px;
                vertical-align: middle;
                img{
                    text-align: center;
                    vertical-align: middle;
                    margin-right: 8px;
                    
                }
            }
            .decrease{
            background:transparent;
            border:none;
            margin-right: 18.67px;
            vertical-align: middle;
            }
            .increase{
            background:transparent;
            border:none;
            margin-left: 18.67px;
            vertical-align: middle;
            }
    }
    .submit{
        background: var(--green);
        width: 173px;
        height:67px;
        border-radius: 50px;
        border:none;
        outline: none;
        transition: filter 0.5s;
        text-transform:uppercase;
        font-size:1.125rem;
        font-weight: 700;
        line-height: 21.09px;
        color: var(--purple);
        margin-top: 40px;
        &:hover{
            filter: brightness(.8);
        }
        
    }
}

@media (max-width: 1240px){
    
    form{
        display: flex;
        flex-direction: column;
        justify-content:center;    
        align-items: center;
        margin: 0 auto;
        margin-top: 61px;
        label{
            margin-top:10px;
            margin-bottom: 20px;
            text-align: center;
            align-items: center;
                .cifrao{
                    padding: 19.5px 20px;            
                }
        } 
    }
}  

@media (max-width: 1080px){
    
    form{
        label{
                .cifrao{
                    padding: 21.5px 20px;            
                }
        } 
    }
} 
`;

export const Header = styled.header`
    img{
        width: 57.47px;
        height: 60px;
        margin-top: 45.59px;
    }
    h1{
        font-size: 3rem;
        font-weight: 600;
        line-height: 56.25px;
        margin-top: 58.41px;
    }
`;
