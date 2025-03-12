<script setup lang="ts"></script>

<template>
  <div class="legal-detail">
    <h2>
      <a href="/company/legal">&lt; BACK</a>
    </h2>
    <h3>Agreement on the Storage of the Cardholder’s Credentials</h3>
    <h5>1. Introduction</h5>
    <p>This Agreement is made between you (the "Cardholder") and ABC (the "Merchant"). By agreeing to this, you authorize ABC and its payment provider to store your card details and process transactions on your behalf.</p>
    <h5>2. Stored Card Details</h5>
    <p>The following card credentials will be stored:</p>
    <p>- Cardholder’s name and surname</p>
    <p>- Card expiration date</p>
    <p>- PAN (Primary Account Number)</p>
    <p>These details will be used for:</p>
    <p>- Cardholder-Initiated Transactions (when you manually make a payment).</p>
    <p>- Merchant-Initiated Transactions (when ABC processes a payment based on prior authorization).</p>
    <h5>3. Payment Terms</h5>
    <p>- Purpose: Used for funding your trading account.</p>
    <p>- Transaction Frequency: No fixed interval (processed only upon request).</p>
    <p>- Confirmation Details: Each transaction confirmation will include the card number (masked), amount, currency, date, authorization code, and merchant location.</p>
    <h5>4. Agreement Updates</h5>
    <p>- You will be notified 7 days in advance for changes to scheduled payments.</p>
    <p>- You will be notified 2 days in advance for changes to unscheduled or manual payments.</p>
    <h5>5. Agreement Validity & Cancellation</h5>
    <p>- This Agreement is valid until canceled by you or ABC, following the Cancellation Policy.</p>
    <p>- Refund and cancellation policies are detailed in Clause 8 of the Non-Trading Transactions Regulation and KYC/AML Policy.</p>
    <h5>6. Contact Information</h5>
    <p>For inquiries related to this Agreement, contact ABC Support at: [support@abc.com].</p>
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
