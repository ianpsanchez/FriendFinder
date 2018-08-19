// ===============================================================================
// DATA
// Below data will hold all of the friends tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var listOfFriends = [
    {
        Name: "Alexandra Daddario",
        Photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTI1MTg0MzYzMF5BMl5BanBnXkFtZTgwMzk4MDAzMjI@._CR542,74,1102,826_UX614_UY460._SY230_SX307_AL_.jpg",
        Scores: [
            1, 2, 3, 4, 5, 4, 3, 2, 1, 1
        ]
    },
    {
        Name: "Kate Upton",
        Photo: "https://st.depositphotos.com/1814084/5060/i/950/depositphotos_50607759-stock-photo-kate-upton.jpg",
        Scores: [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3
        ]
    },
    {
        Name: "Chrissy Teigen",
        Photo: "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_glamour.png,fl_progressive,g_face,h_450,q_80,w_800/v1488839349/glamour_glamour-cover-stars-chrissy-teigen-shows-us-what-s-on-her-phone.jpg",
        Scores: [
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5
        ]
    }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = listOfFriends;