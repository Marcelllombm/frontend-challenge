import { useState } from 'react';
import logo from '../../assets/path3130.svg';
import vetor from '../../assets/Vector.svg';
import decrease from '../../assets/decrease.png';
import increase from '../../assets/increase.svg';
import * as C from './styles'; 
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Detail } from '../Detail';

export function InputValue() {
  // input
  const [grossSalary, setGrossSalary] =useState(0);
  const [salaryDeduction, setSalaryDeduction] = useState(0);
  const [dependent, setDependent] = useState(0);
// save
  const [salary, setSalary] = useState(0);
  const [deduction, setDection] = useState(0);
  const [itemDepedent, setItemDepedent] = useState(0);
      

  const  handleClick = (e: any): void => {
    e.preventDefault();

    if(grossSalary <= 0   ){
      toast.warn("O Campo salário bruto tem que ser maior do que zero.");
    } else{
      if(grossSalary > 7087.22){
        
        toast.warn("Você atigiu o teto do INSS em 2022 R$ 7.087,22");
      }
      setSalary(grossSalary);
      setDection(salaryDeduction);
      setItemDepedent(dependent);
      setGrossSalary(0);
      setSalaryDeduction(0);
      setDependent(0);
    }
  }

 const handleDecrease = (e: any): void => {
  e.preventDefault();

  if(dependent <= 0 ){
    toast.warn("Quantidade mínino 1 dependente.");
    setDependent(0);
  }else{
    const value = dependent;
    const result = value - 1;
    setDependent(result);
  }
 }

 const handleIncrease = (e: any): void => {
  e.preventDefault();

  if(dependent >=9 ){
    toast.warn("Quantidade máxima 9 dependentes.");
  }else{
    const value = dependent;
    const result = value + 1;
    setDependent(result);
  }
 }

  return (
    <>
    <C.Container>
      <ToastContainer/>
      <C.Header>
          <img src={logo} alt="logo" />
          <h1>Calculadora de salário líquido</h1>
      </C.Header>

      <C.Context>

        <form>
          
          <label>
            <h3>Qual seu salário bruto? </h3>
            <span className='cifrao'>R$</span>
            <input 
            type='number'
            value={grossSalary}
            placeholder='0,00'
            onChange={event => setGrossSalary(Number(event.target.value))}
            autoComplete='off'
            />
            <h6>
              <img src={vetor} alt="vetor"/>
              Salário bruto sem descontos
            </h6>
          </label>

          <label>
            <h3>Total de descontos </h3>
            <span className='cifrao'>R$</span>
            <input 
            type='number'
            value={salaryDeduction}
            placeholder='0,00'
            onChange={event => setSalaryDeduction(Number(event.target.value))}
            autoComplete='off'
            />
            <h6>
              <img src={vetor} alt="vetor"/>
              Pensão alimentícia, plano de saúde...
            </h6>
          </label>

          <label>
            <h3>Quantos dependentes você tem?</h3>
            <button className='decrease' onClick={handleDecrease}><img  src={decrease} alt='diminuir'/></button>
            <input 
            type='number'
            value={dependent}
            autoComplete='off'
            placeholder='0'
            className='numb'
            onChange={event => setDependent(Number(event.target.value))}
            
            />
            <button  className='increase' onClick={handleIncrease}><img src={increase} alt='aumentar'/></button>
            <h6>
              <img src={vetor} alt="vetor"/>
              Dependentes declarados no Imposto de Renda
            </h6>
          </label>

          <button className='submit' onClick={handleClick} >Calcular</button>
        </form>

        </C.Context>
    </C.Container>
    <Detail salary={salary} deduction={deduction} depedent={itemDepedent}/>
    </>
  )
}
