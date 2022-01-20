function update_onclick(value,input_box_id){
    const amount=document.getElementById(input_box_id);
    var amount_number=parseInt(amount.value);
    if(amount_number+value<0){
        return;
    }
    amount.value=(amount_number+value);
    update_pricing();
    
}
function update_pricing(){
    const fclass_input=document.getElementById('fclass-input').value;
    fclass_input_number=parseInt(fclass_input);
    const eclass_input=document.getElementById('eclass-input').value;
    eclass_input_number=parseInt(eclass_input);
    const total=fclass_input_number*150+eclass_input_number*100;
    // console.log(total);
    const subtotal=document.getElementById('subtotal');
    const vat=document.getElementById('vat');
    subtotal.innerText=total;
    const vat_amount=(total*.1).toFixed(2);
    vat.innerText=vat_amount;
    document.getElementById('total').innerText=(total+parseFloat(vat_amount)).toFixed(2);


}
const fclass_input=document.getElementById('fclass-input');
const eclass_input=document.getElementById('eclass-input');
const f_plus=document.getElementById('fclass-plus');
const e_plus=document.getElementById('eclass-plus');
f_plus.addEventListener('click',function(){
    update_onclick(1,'fclass-input');
})
e_plus.addEventListener('click',function(){
    update_onclick(1,'eclass-input');
})
fclass_input.addEventListener('change',function(){
    update_pricing();
})
eclass_input.addEventListener('change',function(){
    update_pricing();
})

const f_minus=document.getElementById('fclass-minus');
f_minus.addEventListener('click',function(){
    update_onclick(-1,'fclass-input');
})

const e_minus=document.getElementById('eclass-minus');
e_minus.addEventListener('click',function(){
    update_onclick(-1,'eclass-input');
})


