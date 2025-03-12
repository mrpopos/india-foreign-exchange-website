<script setup lang="ts"></script>

<template>
  <div class="legal-detail">
    <h2>
      <a href="/company/legal">&lt; BACK</a>
    </h2>
    <h3>Risk Disclosure</h3>
    <p>Effective Date: -- : -- : --</p>
    <p>All Clients and potential Clients must carefully read this Risk Disclosure before registering on the ABC platform and starting to trade.</p>
    <h5>1. Understanding the Risks</h5>
    <p>Trading derivative financial instruments is highly speculative and risky. It is suitable only for investors who:</p>
    <p>- Understand and accept the economic, legal, and financial risks involved.</p>
    <p>- Can afford to lose their investment without affecting their financial stability.</p>
    <p>- Have sufficient market knowledge to make informed trading decisions.</p>
    <p>ABC does not provide financial advice or investment recommendations. Clients make their own trading decisions based on their understanding of the market or advice from independent financial experts.</p>
    <p>2. Key Trading Risks</p>
    <p>📌 Volatility – Market prices can be unstable and unpredictable, directly impacting the Client’s financial results.</p>
    <p>📌 Market Fluctuations – Prices can change suddenly due to economic events or announcements, even when markets are closed. This may cause significant losses or gains.</p>
    <p>📌 Liquidity Risk – The value of assets may be influenced by factors such as supply-demand changes, government policies, economic events, and market sentiment.</p>
    <p>📌 Rapid Market Changes – Some markets may change drastically in a short period, making it difficult to secure profits or limit losses.</p>
    <p>Clients should fully understand these risks before engaging in ABC trading activities.</p>

    <h5>2. Trading Risks</h5>
    <p>- Trading derivative financial instruments is highly risky and may result in loss of invested funds.</p>
    <p>- ABC does not provide investment advice. Clients make trading decisions at their own risk.</p>
    <p>- Market factors such as volatility, liquidity, and price fluctuations can impact trade outcomes.</p>
    <h5>3. System & Technical Risks</h5>
    <p>- The Client is responsible for internet, power, or equipment failures that may affect trading.</p>
    <p>- Delays or interruptions in communication, servers, or software may prevent order execution.</p>
    <p>- ABC is not liable for losses due to third-party failures, hacker attacks, or system issues.</p>

    <h5>4. Market & Order Processing Risks</h5>
    <p>- In abnormal market conditions, order processing may take longer.</p>
    <p>- Only ABC's server prices are reliable. The Trading Terminal may display different quotes due to connection issues.</p>
    <p>- Orders cannot be canceled once received by ABC. Re-sending an order may result in unintended trades.</p>

    <h5>5. Data Security Risks</h5>
    <p>- Emails and electronic messages are not fully secure and may be accessed by unauthorized parties.</p>
    <p>- The Client is responsible for protecting account credentials. ABC is not liable for unauthorized access.</p>

    <h5>6. Force Majeure & Legal Risks</h5>
    <p>- Events like war, political instability, economic crises, natural disasters, and technical failures may affect trading.</p>
    <p>- Trading may be restricted or illegal in some countries. The Client must comply with local laws.</p>
    <p>- ABC does not guarantee tax-free trading. The Client is responsible for any applicable taxes.</p>

    <h5>7. Third-Party & Market Information Risks</h5>
    <p>- ABC is not liable for third-party payment processing issues.</p>
    <p>- Market news, recommendations, and signals provided by ABC are for informational purposes only and should not be considered investment advice.</p>
    <p>- Clients should independently assess trading risks before making decisions.</p>

    <h5>8. Client Responsibility</h5>
    <p>- The Client acknowledges all risks and trades at their own discretion.</p>
    <p>- ABC recommends clients evaluate their financial capacity and risk tolerance before trading.</p>
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
