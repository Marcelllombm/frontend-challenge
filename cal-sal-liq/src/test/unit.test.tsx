import { render, screen } from '@testing-library/react';
import App from '../App';

describe('testing text the App', ()=>{
    
  it('show the message "Calculadora de salário líquido"', () => {
    render(<App/>);
    const title = screen.getByRole('heading',{
      level:1,
      name: 'Calculadora de salário líquido',
    });
    expect(title).toBeInTheDocument();
  });
 

 it('show the message "Seu salário líquido será"', () => {
    render(<App/>);
    expect(screen.getByText('Seu salário líquido será')).toBeDefined();
  });


  it('There is an img tag with alt attribute with name logo', ()=>{
    render(<App/>)
    expect(screen.getByTestId('tagImg')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeDefined();
  });


});

describe('show the input and button screen',()=>{
  it('check if a exists  input: grossSalary, salaryDeduction , dependent', ()=>{
    render(<App/>);
  //  const input = screen.getByRole('textbox');
  expect(screen.getByTestId('grossSalary')).toBeInTheDocument();
  expect(screen.getByTestId('salaryDeduction')).toBeInTheDocument();
  expect(screen.getByTestId('dependent')).toBeInTheDocument();
  });


  it('check if the buttons exist: increase decrease calculate', ()=>{
    render(<App/>);
    const buttonCal = screen.getByRole('button',{name:"Calcular", });
    const increase = screen.getByTestId('increase');
    const descrease = screen.getByTestId('descrease'); 
    expect(buttonCal).toBeInTheDocument();
    expect(increase).toBeInTheDocument();
    expect(descrease).toBeInTheDocument();
    
  });
});




