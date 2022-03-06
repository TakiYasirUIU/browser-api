console.log('i am here');
// alert('Ma is coming!!');
const maComing = () => {
    alert('ammu is coming. Open the book');
}

const askPicnic =() => {
   const response = confirm('Are you going to picnic');
   if(response === true){
       alert('amake fee ta bkash kore de');
   }
   else{
       console.log('DGM!!! Door ea giya mor!!!')
   }
   console.log(response);
}
const askName = () => {
    const name = prompt('What is your name');
    if(name){
        console.log(name);
    }
    
}