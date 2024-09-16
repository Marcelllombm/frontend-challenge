import * as C from './styles'; 
import * as FuncTax from '../FuncTaxRate';
interface props {
  salary: number;
  deduction?: number | any;
  depedent?: number | any;
}

export function Detail({salary, deduction, depedent} : props) {
  
  return (
    <C.Container>
      
      <C.ContentBox className='content-box'>
        <h1>Seu salário líquido será</h1>
        <div className='result'><span>R$</span> {FuncTax.netSalary(salary,depedent,deduction)
        .toLocaleString('pt-BR', { minimumFractionDigits: 2,  maximumFractionDigits: 2 })}</div>
      </C.ContentBox>

        <C.Content>
          <h3>Como o cálculo é feito?</h3>
          <table>
            <tbody>
            <tr>
                <td>Salário</td>
                <td>R$ {salary.toLocaleString('pt-BR',  { minimumFractionDigits: 2,
                maximumFractionDigits: 2 })}</td>
            </tr>
            <tr>
                <td>INSS({FuncTax.percentageInss(salary)})</td>
                <td>-R$ {FuncTax.Inss(salary).toLocaleString('pt-BR', { minimumFractionDigits: 2,
                maximumFractionDigits: 2 })}
                </td>
            </tr>
            <tr>
                <td>IRRF({FuncTax.percentageIrrf(salary)})</td>
                <td>- R$ {FuncTax.Irrf(salary , depedent ).toLocaleString('pt-BR', { minimumFractionDigits: 2,
                maximumFractionDigits: 2 })}</td>
            </tr>

            <tr>
                <td>Outros descontos</td>
                <td>- R$ {FuncTax.anotherDiscount(deduction).toLocaleString('pt-BR', { minimumFractionDigits: 2,
                 maximumFractionDigits: 2 })};</td>
            </tr>
            <tr className='bold'>
                <td className="lineTop">Salário líquido</td>
                <td className="lineTop">
                R$ {FuncTax.netSalary(salary,depedent,deduction).toLocaleString('pt-BR', { minimumFractionDigits: 2,
                maximumFractionDigits: 2 })}
                 </td>
            </tr>
            </tbody>
          </table>
        </C.Content>
        
    </C.Container>
  )
}
