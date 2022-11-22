const LIST_OF_BOOK = [];

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getBook() {
        return this;
    }

    static setTableRow() {
        LIST_OF_BOOK.forEach((data) => {
            $("#table-book tbody").append(`<tr><td>${data.title}</td><td>${data.author}</td><td>${data.year}</td><td>${(data.category) ? data.category : "-"}</td></tr>`);
        });
    }
    
    static find(title) {
        $("#table-book tbody").empty();
        console.log(title);
        if (title) {
            const book = LIST_OF_BOOK.find((data) => {
                return data.title === title;
            })
    
            if (book) {
                $("#table-book tbody").append(`<tr><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td><td>${(book.category) ? book.category : "-"}</td></tr>`);
            } else {
                $("#table-book tbody").append(`<tr><td colspan="4">Buku <b>${title}</b> tidak ditemukan!</td></tr>`);
            }
        } else {
            this.setTableRow();
        }
    }
}

// Disini kita akan implementasi kelas turunan dari Book.
class BiografiBook extends Book {
    constructor(title, author, year) {
        super(title, author, year);
    }

    setCategory(category) {
        this.category = category;
    }
}

class NovelBook extends Book {
    constructor(title, author, year) {
        super(title, author, year);
    }
}

const novel_1 = new NovelBook("Rindu", "Tere Liye", "2009");
LIST_OF_BOOK.push(novel_1.getBook());

const novel_2 = new NovelBook("Si Putih", "Tere Liye", "2004");
LIST_OF_BOOK.push(novel_2.getBook());

const novel_3 = new NovelBook("Cantik Itu Luka", "Eka Kurniawan", "2002");
LIST_OF_BOOK.push(novel_3.getBook());

const biografi_1 = new BiografiBook("Al Wafa | Siroh Nabawi", "Imam Ibnul Qoyim", "1190");
biografi_1.setCategory("Sejarah");
LIST_OF_BOOK.push(biografi_1.getBook());

const biografi_2 = new BiografiBook("Tarikh Khulafa", "Salaluddin as-Suyuthi", "1990");
biografi_2.setCategory("Sejarah");
LIST_OF_BOOK.push(biografi_2.getBook());

const biografi_3 = new BiografiBook("Sejarah Tuhan", "Karen Armstrong", "1993");
biografi_3.setCategory("Sejarah");
LIST_OF_BOOK.push(biografi_3.getBook());

LIST_OF_BOOK.forEach((data) => {
    $("#table-book tbody").append(`<tr><td>${data.title}</td><td>${data.author}</td><td>${data.year}</td><td>${(data.category) ? data.category : "-"}</td></tr>`);
})

$(document).ready(() => {
    $("input#input-search-book").keyup(function () {
        const name = $("input#input-search-book").val();
        Book.find(name);
    });
})



