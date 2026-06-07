const btnElement = document.getElementById("btn")

const handleClick = () =>{
    console.log(this)
}

function handleClick1(){
console.log(this);
}

btnElement.addEventListener('click',handleClick1)



function useDebounce(fn,delay=300){
    let timer;
    return function(...arg){
        const context=this
        clearTimeout(timer)

       timer = setTimeout(()=>{
            fn.apply(context,arg)
        },delay)
    }
}

function useThrottle(fn,delay=300){

    let timer=null;
    
    return function(...arg){
        const context=this
        if(!timer){

           timer= setTimeout(()=>{
                fn.apply(context,arg)
                clearTimeout(timer)
                timer=null;
            },delay)
        }
    }
}

document.addEventListener('mousemove',useDebounce(()=>console.log("heelo debouce this is "),300));
document.addEventListener('mousemove',useThrottle(()=>console.log("heelo throttle this is "),3000));

