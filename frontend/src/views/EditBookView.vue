<template>
<div>
    <!-- Set in image given from google isbn by using book.volumeInfo.imageLinks.small or medium at the end -->
    <v-img
        src="https://bad.src/not/valid"
        lazy-src="https://picsum.photos/id/11/100/60"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="500"
        max-height="300"
      >
        <template v-slot:placeholder>
        <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
        >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
    </template>
    </v-img>
    <BookStatusComponent :title="book.volumeInfo.title" :status="result.status" :barcode="result.barcode" />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BooksModule, {GResponse} from '../store/modules/BooksModule';
import BookStatusComponent from '../components/BookStatusComponent'
import key from '../config/api.config'


@Component({
    components: {
        BookStatusComponent
    }
})
export default class EditBook extends Vue {
    private result: {};
    private isbn: GResponse;
    private book: {};
    
    private async created(){
        this.result = BooksModule.fetchSingle(this.$route.params.id)

        this.isbn = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.result.isbn}&key=${key}`)

        this.book = this.isbn.items[0]
    }
    
}
</script>