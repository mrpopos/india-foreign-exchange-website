<script setup lang="ts"></script>

<template>
  <div class="legal-detail">
    <h2>
      <a href="/company/legal">&lt; BACK</a>
    </h2>
    <h3>Promotional Events</h3>
    <p>Effective Date: -- : -- : --</p>
    <h5>1. Introduction</h5>
    <p>1.1. These Promotional Terms apply to all promotions, bonuses, tournaments, and referral programs offered by ABC through its website and services.</p>
    <p>1.2. Some promotions may have specific terms, which will be published on the website. In case of any conflict, specific terms will take precedence.</p>
    <p>1.3. By participating in any promotion, you agree to these terms. If you do not agree, you may opt out of the promotion.</p>

    <h5>2. Promotions & Promotion Periods</h5>
    <p>2.1. ABC may run various promotions, which will be announced through emails, website notifications, and promotional materials.</p>
    <p>2.2. Each promotion will have a specified duration. If no end date is provided, the promotion ends when removed from the website.</p>
    <p>2.3. ABC may engage third parties for promotion management, winner selection, and prize distribution.</p>

    <h5>3. Eligibility</h5>
    <p>3.1. To participate in promotions, you must:</p>
    <p>- Have an active account with ABC.</p>
    <p>- Be legally allowed to use ABC’s services.</p>
    <p>- Meet any specific eligibility criteria outlined in the promotion details.</p>
    <p>3.2. "New Client" promotions are available only to first-time users and cannot be combined with other promotions.</p>
    <p>3.3. ABC reserves the right to verify accounts before allowing participation.</p>

    <h5>4. Rewards</h5>
    <p>4.1. Rewards must be accepted as they are. No cash alternatives are provided unless specified.</p>
    <p>4.2. ABC may substitute any reward with an equivalent alternative.</p>
    <p>4.3. Rewards are non-transferable.</p>
    <p>4.4. The participant is responsible for any taxes or additional costs associated with the reward.</p>
    <p>4.5. ABC is not responsible for reporting or withholding any taxes on winnings.</p>
    <p>4.6. Participants assume full responsibility for the use of rewards. ABC does not guarantee the suitability, quality, or reliability of any reward.</p>
    <p>Promo Codes</p>
    <p>4.7. Promo codes must be entered at the time of deposit to be redeemed.</p>
    <p>4.8. Unless stated otherwise, promo codes are valid for one-time use and cannot be combined with other promotions.</p>
    <p>4.9. Promo codes may expire, and ABC reserves the right to withdraw or cancel any promo code at any time.</p>

    <h5>5. Reward Cancellation & Disqualification</h5>
    <p>5.1. ABC may cancel a reward or disqualify a participant if:</p>
    <p>- They do not meet eligibility requirements.</p>
    <p>- They refuse account verification.</p>
    <p>- They attempt to cheat, manipulate, or tamper with a promotion.</p>
    <p>- They violate ABC’s Service Agreement or act against the spirit of the promotion.</p>
    <p>5.2. ABC may disqualify participants at its sole discretion without explanation.</p>
    <p>5.3. If disqualified, ABC may reclaim any awarded rewards from the participant’s account.</p>

    <h5>6. Miscellaneous</h5>
    <p>6.1. Any situation not covered in these terms will be handled at ABC’s discretion.</p>
    <p>6.2. By participating, you agree to allow ABC to use your contact details for promotion updates, notifications, and marketing.</p>
    <p>6.3. If a reward includes a third-party product or brand, ABC has no affiliation, endorsement, or sponsorship from the third party.</p>

    <h5>7. Bonuses</h5>
    <p>7.1. Bonuses are virtual funds credited to the Client’s account when certain conditions are met.</p>
    <p>7.2. When trading, Client’s deposited funds are used first, and only after they are depleted, the Bonus funds can be used.</p>
    <p>7.3. Bonuses cannot be withdrawn, unless specific withdrawal conditions are met. If a Client withdraws deposited funds, ABC may deduct the full bonus amount from the account.</p>
    <p>7.4. ABC reserves the right to set:</p>
    <p>- Minimum trading volumes for bonus withdrawals.</p>
    <p>- Other conditions governing the use and withdrawal of bonuses.</p>
    <p>7.5. The bonus rules and conditions will be published on the ABC website.</p>
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
