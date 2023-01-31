<template>
    <!-- container boshlandi -->
    <div class="container-fluid">

        <HeaderRow/>

        <!-- main qatori boshlandi -->
        <div class="row mt-4">

            <CategoryCol/>

            <!-- kontent boshlandi -->
            <div class="col-12 col-md-10 mt-4 mt-md-0">

               <BooksRow/>
                <PaginationRow/>

            </div>
            <!-- kontent tugadi -->

        </div>
        <!-- main qatori tugadi -->

        <FooterRow/>

    </div>
    <!-- container tugadi -->
</template>

<script>

import HeaderRow from "@/components/HeaderRow.vue";
import CategoryCol from "@/components/CategoryCol.vue";
import FooterRow from "@/components/FooterRow.vue";
import BooksRow from "@/components/BooksRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";

export default {
  name: 'App',
    components: {PaginationRow, BooksRow, FooterRow, CategoryCol, HeaderRow}

}
</script>

<style>


</style>
