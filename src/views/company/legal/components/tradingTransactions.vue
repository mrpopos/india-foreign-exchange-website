<script setup lang="ts"></script>

<template>
  <div class="legal-detail">
    <h2>
      <a href="/company/legal">&lt; BACK</a>
    </h2>
    <h3>Trading Transactions Policy</h3>
    <h5>1. General Provisions</h5>
    <p>1.1. This Trading Transactions Policy outlines the procedures and conditions for executing trades on ABC.</p>
    <p>1.2. ABC processes and executes orders according to this Policy and reserves the right to set trading conditions.</p>
    <p>1.3. The Company’s server is the only reliable source of quote information. Graphs on the Trading Terminal are indicative and may not reflect the exact execution price.</p>
    <p>1.4. If a non-market quote is used to execute a trade, ABC may cancel the financial result of that transaction.</p>
    <p>1.5. Trades can only be executed using available funds in the Client’s account:</p>
    <p>- If funds are sufficient, the trade will be processed.</p>
    <p>- If funds are insufficient, the trade will not be processed.</p>
    <p>1.6. A trade is considered executed or closed once a record appears on the ABC server and is assigned a transaction ID.</p>
    <p>1.7. The Client is prohibited from:</p>
    <p>- Using ABC for illegal activities, including fraud or money laundering.</p>
    <p>- Coordinating with others to exploit the platform or cause harm to ABC.</p>
    <p>1.8. ABC reserves the right to set trading limits, including:</p>
    <p>- Minimum and maximum trade amounts for each asset.</p>
    <p>- Limits on trade volume within a set time frame.</p>
    <p>- Restrictions on open trades based on asset type or account activity.</p>
    <p>ABC may adjust these conditions at its discretion.</p>

    <h5>2. Messaging</h5>
    <p>2.1. ABC and the Client will communicate via the Trading Terminal for requests, confirmations, reports, and other messages.</p>
    <p>2.2. Any message sent from the Client’s Trading Terminal using their username and password is considered authorized and sent by the Client.</p>
    <p>2.3. Processing time for requests depends on the quality of the connection and market conditions:</p>
    <p>- Normal market conditions: Requests are processed within 0-5 seconds.</p>
    <p>- Abnormal market conditions: Processing time may be longer.</p>
    <p>2.4. ABC may reject a Client’s request or order if:</p>
    <p>- No market quote is available at the session opening.</p>
    <p>- The Client does not have sufficient funds to open a trade.</p>
    <p>- The market is in abnormal conditions.</p>
    <p>- Other circumstances determined by ABC at its discretion.</p>

    <h5>3. Making Trades</h5>
    <p>3.1. A trade is made when ABC and the Client agree on the trade’s essential conditions via message exchange.</p>
    <p>3.2. Before making a trade, the Client selects:</p>
    <p>- Underlying asset</p>
    <p>- Direction of rate change</p>
    <p>- Trade amount</p>
    <p>3.3. The Client must review the current asset rate and payout ratio before confirming the trade.</p>
    <p>3.4. To execute a trade, the Client sends a trade request to ABC, including all selected conditions.</p>
    <p>
      3.5. If the internet connection is stable, the request is processed by ABC’s server, which checks accuracy and market conditions before execution. The trade amount is deducted from the Client’s balance. No commission is charged for
      making a trade.
    </p>
    <p>3.6. A trade request may be canceled if:</p>
    <p>- The trade amount exceeds the Client’s balance.</p>
    <p>- The trading session for the asset has ended.</p>
    <p>- There is a significant price change before processing.</p>
    <p>- Other conditions determined by ABC apply.</p>
    <p>3.7. ABC’s server sends the trade result to the Client’s Trading Terminal. If executed, a confirmation appears in the Trading Terminal. If canceled, an error message is displayed.</p>
    <p>3.8. If the Client does not receive confirmation or an error message, they must contact Customer Support for verification.</p>
    <p>3.9. Once a trade request is sent, the Client cannot cancel it.</p>
    <p>3.10. The payout ratio displayed on the website is approximate. The final payout ratio is determined when the trade is processed.</p>

    <h5>4. Closing Trades & Payout Calculation</h5>
    <p>4.1. Trades close automatically at the expiration time. The payout is calculated and added to the Client’s balance, and the trade disappears from the open trades list.</p>
    <p>4.2. Payout Calculation:</p>
    <p>- If the trade is profitable, the payout is:</p>
    <p>S × (100 + K) / 100, where:</p>
    <p>- S = Trade amount</p>
    <p>- K = Payout percentage</p>
    <p>- If the trade is unprofitable, the payout is zero.</p>
    <p>4.3. A trade is profitable if:</p>
    <p>- The trade direction is "Up" and the asset rate at expiration is higher than the target level.</p>
    <p>- The trade direction is "Down" and the asset rate at expiration is lower than the target level.</p>
    <p>4.4. If the asset rate at expiration equals the target level (±1 tick), the trade amount is refunded to the Client. In all other cases, trade is unprofitable.</p>

    <h5>5. Trading Time</h5>
    <p>5.1. ABC sets the trading schedule for each asset, determining when trades can be opened and closed.</p>
    <p>5.2. The trading hours displayed on the website are approximate and may change at ABC's discretion.</p>

    <h5>6. Exceptional Situations</h5>
    <p>6.1. In exceptional situations, ABC may modify trading conditions to ensure fair execution of trades.</p>
    <p>6.2. Exceptional situations include:</p>
    <p>- Slow or irregular market conditions where quotes update less frequently.</p>
    <p>- Rapid price movements within a short period.</p>
    <p>- Major economic events, such as interest rate decisions, central bank announcements, or financial market disruptions.</p>
    <p>- Political force majeure, including elections, resignations, or government interventions.</p>
    <p>- Wars, terrorist attacks, natural disasters, or civil unrest.</p>
    <p>- Technical failures affect the company or third-party service providers.</p>
    <p>- Market suspensions, liquidity shortages, or extreme volatility.</p>
    <p>6.3. In such cases, ABC may:</p>
    <p>- Adjust payout ratios.</p>
    <p>- Reject trade requests, cancellations, or revisions.</p>
    <p>- Limit the number of trades per client within a given period.</p>
    <p>- Restrict expiration times for certain trades.</p>
    <p>- Temporarily suspend trading on certain assets.</p>
    <p>6.4. ABC may apply these actions under other conditions outlined in this Policy or the Agreement when necessary.</p>
  </div>
</template>

<style lang="scss" scoped>
.legal-detail {
  line-height: 1.7;
  h2 {
    padding-bottom: 25px;
    a {
      padding: 8px 20px;
      background-color: #001b48;
      color: #ffffff;
      font-weight: 600;
      border-radius: 5px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  h4 {
    font-size: 17px;
    font-weight: 600;
    padding: 10px 0;
  }
  h5 {
    color: #0856dd;
    font-size: 16px;
    font-weight: 600;
    padding: 25px 0 5px 0;
  }
  p {
    padding: 6px 0;
    b {
      span {
        font-size: 16px;
        font-weight: 600;
      }
    }
    a {
      color: #001b48;
      text-decoration: underline;
    }
  }
  ul {
    padding: 15px 0;
    li {
      padding: 5px 0;
      &:before {
        content: '- ';
        padding-right: 5px;
      }
    }
  }
}
</style>
