var arr = ["Osap2.png", "Osap3.png", "Osap1.png"];
var i = 0;

function change(){
    var getImage = document.getElementById('osapImage');
    getImage.src = arr[i % (arr.length)];
    i++;
    if(i > 2){
        i = 0;
    }
}

var pthreadArr = ["pthread2.png", "pthread1.png"];
var j = 0;
function changethread(){
    var getPthreadImage = document.getElementById('pthreadImage');
    getPthreadImage.src = pthreadArr[j % pthreadArr.length];
    j++;

    if(j > 1){
        j = 0;
    }

}

var bookStoreArr = ["Bookstore2.png", "Bookstore3.png", "Bookstore4.png", "Bookstore5.png", "Bookstore1.png"];
var k = 0;

function changeBook() {
    var getBook = document.getElementById('bookStore');
    getBook.src = bookStoreArr[k % bookStoreArr.length];
    k++;

    if(k > (bookStoreArr.length - 1)) {
        k = 0;
    }

}