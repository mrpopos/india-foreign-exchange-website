<script setup lang="ts"></script>

<template>
  <div class="legal-detail">
    <h2>
      <a href="/company/legal">&lt; BACK</a>
    </h2>
    <h3>Service Agreement</h3>
    <h5>1. Introduction</h5>
    <p>This Privacy Policy explains how ABC collects, uses, and protects your information when you use our services. By using ABC, you agree with the collection and use of your information as described in this policy.</p>

    <h5>2. Information We Collect</h5>
    <p>- Personal Information: Name, email, profile picture (when logging in via third-party services).</p>
    <p>- Device & Usage Data: IP address, device type, operating system, app usage, and error logs.</p>
    <p>- Third-Party Services: We may collect data through services like Google Play Services and Facebook.</p>

    <h5>3. How We Use Your Information</h5>
    <p>- To provide and improve our services.</p>
    <p>- To manage security risks and prevent fraud.</p>
    <p>- To comply with legal and regulatory requirements.</p>
    <p>- To analyze trends and enhance user experience.</p>

    <h5>4. Your Rights</h5>
    <p>You have the right to:</p>
    <p>- Request updates to your personal information.</p>
    <p>- Request deletion of your personal data.</p>
    <p>- To make any changes, contact us at [support@abc.com].</p>

    <h5>5. Security & Data Protection</h5>
    <p>- We use secure measures to protect your data, but no system is 100% secure.</p>
    <p>- Do not share your passwords with anyone.</p>

    <h5>6. Cookies & Tracking</h5>
    <p>- We may use cookies to improve user experience. You can disable cookies in your browser settings.</p>

    <h5>7. Third-Party Services</h5>
    <p>- We may work with third-party providers for analytics and service improvements.</p>
    <p>- These providers must follow privacy and security regulations.</p>

    <h5>8. Links to Other Websites</h5>
    <p>- We are not responsible for the privacy practices of third-party websites linked by ABC.</p>

    <h5>9. Children's Privacy</h5>
    <p>- ABC does not collect data from children under 13. If we discover such data, we will delete it immediately.</p>

    <h5>10. Updates to This Policy</h5>
    <p>- We may update this policy from time to time. Changes will be posted on this page and take effect immediately.</p>

    <h5>11. Contact Us</h5>
    <p>For any questions about this Privacy Policy, contact us at [support@abc.com].</p>
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
