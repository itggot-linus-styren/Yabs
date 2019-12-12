<template>
  <div>
    <h1 class="display-2">Loans</h1>
    <LoaningForm @loan-added="onLoanAdded" />
    <RecentLoan @loans-loaded="onLoaded" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import LoaningForm from '@/components/LoaningForm.vue';
import RecentLoan from '@/components/RecentLoan.vue';

@Component({
  components: {
    LoaningForm,
    RecentLoan
  }
})
export default class AdminLoansView extends Vue {}
</script>

<style scoped>
</style>
