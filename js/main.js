const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function (event) {
      // console.log('イベント')
      // オブジェクトを配列に追加。
      if (this.newItem === '') {
        // そこで処理を終了する
        return
      }
      let todo = {
        item: this.newItem,
        // タスクの完了・未完了
        isDone: false,
      };
      // push　配列の最後に新しいメソッドを追加できる
      this.todos.push(todo)
      // addをクリックしたら、inputを空にする
      this.newItem = ''
    },
    deleteItem: function (index) {
      // console.log('消す')
      // console.log(index)
      this.todos.splice(index, 1)
    }
  },
});
app.mount('#app')
