const calculate = () => {
    let face=document.getElementById('face').value;
    let rate=document.getElementById('rate').value;
    let tenor=document.getElementById('tenor').value;

    if(face == null) face = 0;
    if(rate == null) rate = 0;
    if(tenor == null) tenor = 0;

    let upfront = (face*rate*tenor)/365;
    let discount = face-upfront;
    let effective = rate/(1-((face*tenor)/365))

    console.log(upfront, discount, effective)

    document.getElementById('upfront').textContent = upfront.toFixed(2);
    document.getElementById('discounted').textContent = discount.toFixed(2);
    document.getElementById('effective').textContent = effective.toFixed(2);
}