    const App = {
        data() {
            return {
                placeholderString: 'Введите название заметки',
                title: 'Список заметок',
                inputValue: '',
                notes: ['1', '2']
            }
        },

        methods: {
            addNewNote() {
                if (this.inputValue !== '') {
                    this.notes.push(this.inputValue)
                this.inputValue = ''
                }
                
            },
            doubleCount() {
                console.log('doubleCount')
                return this.notes.length * 2
            },
            toUpperCase (item) {
                return item.toUpperCase()
            },
            removeNote(index, event) {
                this.notes.splice(index, 1)
            }
        },

        computed: {
            doubleCountComputed() {
                console.log('doubleCountComputed')
                return this.notes.length * 2
            }
        },

        watch: {
            inputValue(value) {
                if(value.length > 10 ) {
                    this.inputValue = ''
                }
            }
        }
}

Vue.createApp(App).mount('#app')

