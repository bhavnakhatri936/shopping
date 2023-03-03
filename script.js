var arr = [
    {
        name: "Red Chex shirt",
        price: "$10",
        image: "/red.jpg",
        category: "shirts",
        productid: 1,
    },
    {
        name: "Green Chex shirt",
        price: "$10",
        image: "/greenshirt.jpg",
        category: "shirts",
        productid: 2,
    },
    {
        name: "Black Chex shirt",
        price: "$10",
        image: "blackshirt.jpg",
        category: "shirts",
        productid: 3,
    },
    {
        name: "Blue Chex shirt",
        price: "$10",
        image: "blueshirt.jpg",
        category: "shirts",
        productid: 4,
    },
    {
        name: "Navy Blue Chex shirt",
        price: "$10",
        image: "navyblueshirt.jpg",
        category: "shirts",
        productid: 5,
    },
    {
        name: "Yellow Chex shirt",
        price: "$10",
        image: "yellowshirt.jpg",
        category: "shirts",
        productid: 6,
    },
    {
        name: "Men's pant",
        price: "$10",
        image: "pant.jpg",
        category: "pant",
        productid: 7,
    },
    {
        name: "Men's cream pant",
        price: "$10",
        image: "pant.cream.jpg",
        category: "pant",
        productid: 8,
    },
    {
        name: "Men's pant",
        price: "$10",
        image: "pant.jpg",
        category: "pant",
        productid: 9,
    },
    {
        name: "Men's pant",
        price: "$10",
        image: "bluepant.jpg",
        category: "pant",
        productid: 10,
    },
    {
        name: "Men's red maroon Tshirt",
        price: "$10",
        image: "tshirt1.jpg",
        category: "tshirt",
        productid: 11,
    },
    {
        name: "Men's grey Tshirt",
        price: "$10",
        image: "tshirt2.jpg",
        category: "tshirt",
        productid: 12,
    },
    {
        name: "Men's blue Tshirt",
        price: "$10",
        image: "tsh3.jpg",
        category: "tshirt",
        productid: 13,
    },
    {
        name: "Men's grey black Tshirt",
        price: "$10",
        image: "tsh4.jpg",
        category: "tshirt",
        productid: 14,
    },
    {
        name: "Men's black Tshirt",
        price: "$10",
        image: "tshj5.jpg",
        category: "tshirt",
        productid: 15,
    },
    {
        name: "Speaker",
        price: "$10",
        image: "elc1.jpg",
        category: "elec",
        productid: 16,
    },
    {
        name: "Printer",
        price: "$10",
        image: "elc2.jpg",
        category: "elec",
        productid: 17,
    },
    {
        name: "Headphones",
        price: "$10",
        image: "elc3.jpg",
        category: "elec",
        productid: 18,
    },
    {
        name: "Maggie",
        price: "$10",
        image: "gros1.jpg",
        category: "Grossery",
        productid: 19,
    },
    {
        name: "Lentils",
        price: "$10",
        image: "gros2.jpg",
        category: "Grossery",
        productid: 20,
    },
];
console.log(arr);

function arrayprint(a) {
    var makediv = "<div class='row'>";
    for (i = 0; i < a.length; i++) {
        makediv +=
            "<div class='col-md-4 colmargin'>" +
            "<img src='" +
            a[i].image +
            "'>" +
            "<br>" +
            a[i].name +
            "<br>" +
            a[i].price +
            "<br>" +
            "<button onclick='cartfunc(" +
            a[i].productid +
            ")'>Add to cart</button>" +
            "</div>";
    }
    makediv += "</div>";
    document.getElementById("products").innerHTML = makediv;
}
arrayprint(arr);
$(document).on("click", ".filterprod", function () {
    let farray = arr.filter(function (obj) {
        return obj.category == "pant";
      });
   
    arrayprint(farray);
   

});
function filterprod(a){
    let farray = arr.filter(function (obj) {
        return obj.category == a;
      });
   
    arrayprint(farray);
}

function allprod(){
    arrayprint(arr);
       
}
if (localStorage.getItem("data") == null) {
    cartarr = [];
} else {
    cartarr = JSON.parse(localStorage.getItem("data"));
    document.getElementById("cart").innerHTML = cartarr.length;
}

function cartfunc(i) {
    if (localStorage.getItem("data") == null) {
        localdata = [];
    } else {
        localdata = JSON.parse(localStorage.getItem("data"));
       
    }

    const resultObject = search(arr[i].productid, localdata);
    if (resultObject == undefined) {
        localdata.push(arr[i]);
    }
    document.getElementById("cart").innerHTML = localdata.length;

    localStorage.setItem("data", JSON.stringify(localdata));
}



$(document).on("click", "#carta", function () {
    var localdata = JSON.parse(localStorage.getItem("data"));
    arrayprint(localdata);
});


function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].productid === nameKey) {
            return myArray[i];
        }
    }
}
