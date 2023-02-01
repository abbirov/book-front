<template>
    <BooksRow/>
    <PaginationRow/>
</template>

<script>
import BooksRow from "@/components/BooksRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";

export default {
    name: "HomePage",
    components: {PaginationRow, BooksRow}
}
</script>

<style scoped>

</style>