<script setup lang="ts"></script>

<template>
  <div class="legal-detail">
    <h2>
      <a href="/company/legal">&lt; BACK</a>
    </h2>
    <h3>Agreement on the Storage of the Cardholder’s Credentials</h3>
    <p>
      <span class="sort">1.</span
      ><span
        >This Agreement on the Storage of the Cardholder’s Credentials (hereinafter – the
        “Agreement”) is entered into between you (hereinafter also referred to as – the
        “Cardholder”) and GURUTRADE7 LIMITED, having its registered address at: First Floor, First
        St Vincent Bank Ltd Building, James Street, Kingstown, St. Vincent and the Grenadines.
        (hereinafter – the “Merchant”).</span
      >
    </p>
    <p>
      <span class="sort">2.</span
      ><span
        >By ticking the relevant tick-box you express full consent to this Agreement and authorize
        the Merchant and its payment processing service provider to store your name, surname, card
        expiry date, and PAN number (hereinafter – the Credentials on File (COF)) and to initiate
        transactions on your behalf (hereinafter – Merchant-Initiated COF Transactions) and/or to
        process transactions initiated by you (hereinafter – Cardholder-Initiated COF Transactions),
        both by using the Credentials of File, as indicated below.</span
      >
    </p>
    <p>
      <span>Disclosures of the Merchant:</span>
    </p>
    <div>
      <div>
        <ul>
          <li>
            <span
              >Your Credentials will be used for: Cardholder-Initiated COF Transactions and
              Merchant-Initiated COF Transactions.</span
            >
          </li>
          <li>
            <span
              >Description of services: Fixed Time Trades services as described in the Service
              Agreement on our website.</span
            >
          </li>
          <li><span>Fixed date or interval of the Transaction: N/A</span></li>
          <li>
            <span
              >Event that will prompt the Transaction: Cardholder’s request to replenish client
              balance.</span
            >
          </li>
        </ul>
      </div>
    </div>
    <p>
      <span class="sort">4.</span
      ><span
        >The following details in relation to this Agreement shall be included in the transaction
        confirmation: card number, transaction amount, surcharges (if applicable), transaction
        currency, transaction date, authorization code, the Merchant’s location.</span
      >
    </p>
    <p>
      <span class="sort">5.</span
      ><span
        >You will be notified of any changes to the present Agreement 7 (seven) business days before
        such changes become effective in relation to scheduled (with fixed, regular intervals)
        Merchant-Initiated COF Transactions, and 2 (two) business days before such changes become
        effective in relation to Merchant-Initiated COF Transactions which are unscheduled or in
        relation to Cardholder-Initiated COF Transactions.</span
      >
    </p>
    <p>
      <span class="sort">6.</span
      ><span
        >The Agreement shall enter into force after successful authorization (or account
        verification) by your card issuer and receipt of your consent to this Agreement by the
        Merchant, and shall be valid until terminated by you or by the Merchant according to the
        Cancellation policy.</span
      >
    </p>
    <p>
      <span class="sort">7.</span
      ><span
        >The Cancellation and refund policies of the Merchant are accessible are available in clause
        8 of the Non-trading Transactions Regulation and KYC/AML Policy.</span
      >
    </p>
    <p>
      <span class="sort">8.</span
      ><span
        >In case of any inquiries related to this Agreement, please contact:
        support@gurutrade7.com</span
      >
    </p>
  </div>
</template>

<style lang="scss" scoped>
.legal-detail {
  font-size: 16px;
  color: #bbbbbb;
  line-height: 1.7;
  h2 {
    padding-bottom: 25px;
    a {
      padding: 8px 20px;
      background-color: #282828;
      font-weight: 600;
      color: #bbb;
      border-radius: 5px;
    }
  }
  h3 {
    font-size: 18px;
    color: #ffffff;
    font-weight: 600;
  }
  p {
    padding: 8px 0;
    b {
      span {
        color: #fefefe;
        font-weight: 600;
      }
    }
    .sort {
      font-weight: 600;
      padding-right: 5px;
    }
  }
  ul {
    padding: 5px 0;
    li {
      &:before {
        content: '- ';
        color: #fefefe;
      }
    }
  }
}
</style>
