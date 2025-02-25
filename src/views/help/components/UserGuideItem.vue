<template>
  <div class="user-guide-item">
    <div class="svg">
      <template v-if="data.name === 'trading'"><IconTrading /></template>
      <template v-else-if="data.name === 'profile'"><IconProfile /></template>
      <template v-else-if="data.name === 'account-types'"><IconAccount /></template>
      <template v-else-if="data.name === 'payment'"><IconDeposits /></template>
      <template v-else-if="data.name === 'payouts'"><IconWithdrawals /></template>
      <template v-else-if="data.name === 'statuses'"><IconStatuses /></template>
      <template v-else-if="data.name === 'verification'"><IconVerification /></template>
      <template v-else-if="data.name === 'market-place'"><IconMarket /></template>
      <template v-else-if="data.name === 'tether'"><IconTether /></template>
      <template v-else><IconCustom /></template>
    </div>
    <div class="title">{{ data.title }}</div>
  </div>
</template>

<script setup lang="ts">
import IconAccount from './icons/IconAccount.vue'
import IconCustom from './icons/IconCustom.vue'
import IconDeposits from './icons/IconDeposits.vue'
import IconMarket from './icons/IconMarket.vue'
import IconProfile from './icons/IconProfile.vue'
import IconStatuses from './icons/IconStatuses.vue'
import IconTrading from './icons/IconTrading.vue'
import IconVerification from './icons/IconVerification.vue'
import IconWithdrawals from './icons/IconWithdrawals.vue'
import IconTether from './icons/IconTether.vue'

interface IPropsData {
  name: string
  title: string
}

defineProps<{ data: IPropsData }>()
</script>

<style lang="scss" scoped>
.user-guide-item {
  min-width: 10rem;
  height: 168px;
  @include mixins.flex-container(column, nowrap, space-between, flex-start);
  padding: var(--padding-16);
  border: 0.0625rem solid #f2f2f200;
  cursor: pointer;
  background-color: var(--c-white-2);
  border-radius: var(--padding-8);

  .svg {
    width: 32px;
    height: 32px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    font-size: var(--small-text-fz);
  }

  &:hover {
    background-color: var(--c-hover-2);
  }
}
</style>
