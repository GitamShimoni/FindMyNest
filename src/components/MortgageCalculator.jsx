import { useState } from 'react';
import './MortgageCalculator.css'
import agent2 from '../icons/agent2.jfif'
import agent3 from '../icons/agent3.jfif'
const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    const monthlyPayment =
      (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    calculateMonthlyPayment();
  };

  return (
    <div id='calculator-agents-div'>
        <div id='agents-div'>
            <div id='agent-div-1'>
                    <div id='agent1-div-description'>
                    <h1 id='agents-div-header'>Our Agents</h1>
                </div>
            </div>
            <div id='agent-div-2'>
                <div id='agent2-div-description1'>
                    <h2 id='agent2-description'>Geetam</h2>
                    <h4 id='agent2-description-2'>Fullstack Engineer</h4>
                </div>
                 <img id='agent-2-picture' src={agent2} alt="agent2" />
            </div>
            <div id='agent-div-3'>
                <div id='agent3-div-description1'>
                    <h2 id='agent3-description'>Gootam</h2>
                    <h4 id='agent3-description-2'>{`"best estate finder all around the world"`}</h4>
                    <h4 id='agent3-description-3'>-IGN</h4>
                </div>
                <img id='agent-3-picture' src={agent3} alt="agent3" />
            </div>
        </div>
    <div className="mortgage-calculator">
      <h2 className="calculator-heading">Mortgage Calculator</h2>
      <form onSubmit={handleFormSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="loan-amount">Loan Amount:</label>
          <input
            type="number"
            id="loan-amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="interest-rate">Interest Rate:</label>
          <input
            type="number"
            id="interest-rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loan-term">Loan Term (in years):</label>
          <input
            type="number"
            id="loan-term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {monthlyPayment && (
        <div className="result">
          <h3>Monthly Payment:</h3>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default MortgageCalculator;