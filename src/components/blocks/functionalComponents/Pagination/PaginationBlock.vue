<template>
    <paginate 
    :page-count="10" 
    :page-range="5" 
    :margin-pages="2" 
    :initial-page="1"
    :click-handler="clickCallback" 
    :prev-text="'«'"
    :next-text="'»'" 
    :container-class="'pagination'" 
    :page-class="'page-item cursor-pointer text-center w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center'"
    :page-link-class="'text-black w-full'"
    :active-class="'blue text-white'"
    :prev-class="'bg-white bg-white shadow-lg w-[3.25rem] h-[3.25rem] rounded-full text-center flex items-center justify-center cursor-pointer w-full'"
    :next-class="'bg-white bg-white shadow-lg w-[3.25rem] h-[3.25rem] rounded-full text-center flex items-center justify-center cursor-pointer w-full'" 
    >
    
    </paginate>
</template>
  
<script>
import Paginate from 'vuejs-paginate-next';
export default {
    name: "PaginationBlock",
    components: {
        paginate: Paginate,
    },
    methods: {
        clickCallback(pageNum) { console.log(pageNum) }
    },
};
</script>
  
<style scoped lang="scss">
/* Adopt bootstrap pagination stylesheet. */
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; */


/* Write your own CSS for pagination */
.pagination {
    display: flex;
    justify-content: space-around;
}

.page-item {
    // background-color: #4267B2;
    // border-radius: 50%;
    // width: 52px;
    // height: 52px;
    // text-align: center;
    // display: flex;
    // align-items: center;
    // justify-content: center;

    // .page-link {
    //     text-decoration: none;
    //     color: white;
    // }

    
}


</style>