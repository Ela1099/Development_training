
export interface Book {
    name: string;
    author: string;
    publish: string;
    image: string;
    id: number;
}

export const BOOKS:Book[]=[
    {
        name: "Преступление и наказание",
        author: "Фёдор Достоевский",
        publish: "1866",
        image: "https://example.com/crime_and_punishment.jpg",  
        id: 1
    },
    {
        name: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        publish: "1967",
        image: "https://example.com/master_and_margarita.jpg", 
        id: 2
    },
    {
        name: "1984",
        author: "Джордж Оруэлл",
        publish: "1949",
        image: "https://example.com/1984.jpg", 
        id: 3
    },
    {
        name: "Убить пересмешника",
        author: "Харпер Ли",
        publish: "1960",
        image: "https://example.com/to_kill_a_mockingbird.jpg",
        id: 4
    },
    {
        name: "Властелин колец: Братство кольца",
        author: "Джон Р.Р. Толкин",
        publish: "1954",
        image: "https://example.com/lord_of_the_rings_1.jpg", 
        id: 5
    },
    {
        name: "Анна Каренина",
        author: "Лев Толстой",
        publish: "1877",
        image: "https://example.com/anna_karenina.jpg", 
        id: 6
    },
    {
        name: "Сто лет одиночества",
        author: "Габриэль Гарсиа Маркес",
        publish: "1967",
        image: "https://example.com/one_hundred_years_of_solitude.jpg", 
        id: 7
    },

    {
        name: "Анна Каренина",
        author: "Лев Толстой",
        publish: "1877",
        image: "https://example.com/anna_karenina.jpg", 
        id: 8
    },
    {
        name: "Сто лет одиночества",
        author: "Габриэль Гарсиа Маркес",
        publish: "1967",
        image: "https://example.com/one_hundred_years_of_solitude.jpg", 
        id: 9
    },
]