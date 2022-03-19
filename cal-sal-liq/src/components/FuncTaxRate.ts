export const Inss = (salary: Number) =>{
    const value : any = salary;
    if(salary <= 1212){
      return  (value * 7.5) /100;
    }else if (salary <= 2427.35){
      return (value * 9 ) / 100;
    }else if(salary <= 3641.03 ){
      return (value * 12 ) / 100;
    }else{
      return (value * 14) / 100;
    }
  };

export const percentageInss = (salary: Number) =>{
    if(salary <= 1212){
        return  '7.5 %';
      }else if (salary <= 2427.35){
        return '9 %' ;
      }else if(salary <= 3641.03 ){
        return '12 %';
      }else{
        return '14 %';
      }
}

export const Irrf = (salary: Number, depedent: Number) =>{
    const InssValue : any = Inss(salary);
    const depedentValue = 189.59;
    const depedentQuantity : any = depedent;
    const depedentValueTotal  = depedent > 0 ? (depedentQuantity * depedentValue) : 0;
    const SalaryValue : any = salary;
    const IrrfResult = (SalaryValue - InssValue) - depedentValueTotal;

    if( IrrfResult <= 1903.98){
        return '0,00';
    }else if(IrrfResult >= 1903.99 && IrrfResult <= 2826.65){
      const result = (IrrfResult *7.5) / 100;
      return (result - 142.80 );
    }else if (IrrfResult >= 2826.66 && IrrfResult <= 3751.05){
        const result = (IrrfResult * 15) / 100;
        return (result - 354.80 );
    }else if(IrrfResult >= 3751.06 && IrrfResult <= 4664.68 ){
        const result = (IrrfResult * 22.5) / 100;
        return (result - 636.13 );
    }else{
        const result = (IrrfResult * 27.5) / 100;
        return (result - 869.36 );
    }

  };

  export const percentageIrrf = (salary: Number) =>{
    if(salary <= 1903.98){
        return  '-';
      }else if (salary >= 1903.99 && salary <= 2826.55){
        return '7.5 %' ;
      }else if(salary >= 2826.56 && salary <= 3751.05){
        return '15 %';
      }else if(salary >= 3751.06 && salary <= 4664.68){
        return '22.5 %';
      }else{
        return '27.5 %';
      }
}

export const anotherDiscount = (deduction: Number) => {
    return  deduction;
}

export const netSalary = (salary: Number, depedent: Number, deduction: Number ) =>{
   const salaryValue : any = salary > 0 ? salary : 0;
   const irrfValue : any = Irrf(salary, depedent) > 0 ? Irrf(salary, depedent) : 0 ;
   const inssValue : any  = Inss(salary) > 0 ? Inss(salary) : 0;
   const anotherDiscountValue : any = anotherDiscount(deduction) > 0 ? anotherDiscount(deduction) : 0;

   return salaryValue - irrfValue - inssValue - anotherDiscountValue

    
}