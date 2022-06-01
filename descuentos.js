//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){

    console.log("TEXTO: " + precio + " Y "+ descuento);
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
};


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name:"MAMA",
            discount:15,
        },
        {
            name:"NIÑO",
            discount:30,
        },
        {
            name:"PAPA",
            discount:25,
        },    
    ];

    //Validación
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);

    
 
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido.");
    } else {
        const descuento = userCoupon.discount;
        console.log("TEXTO:" + descuento);
        const precioConDescuento = calcularPrecioConDescuento(price, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "el precio con descuentos son: $" + precioConDescuento;
    }
    
    
/* 
    console.log({
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento,
    });
     */
};









