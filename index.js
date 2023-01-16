let confettiSettings = { target: 'my-canvas', animate:true };
let confetti = new ConfettiGenerator(confettiSettings);

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let prevRecord = {
    entries:0,
    current:0
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    isRecordBreaker()
    countEl.textContent = 0
    count = 0  
}

function isRecordBreaker(){
    if(prevRecord.entries > 0 && count > prevRecord.current){
        let confettiSettings = { target: 'my-canvas', animate:true };
        let confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        prevRecord.entries += prevRecord.entries+1;
        setTimeout(()=>{
            confetti.clear()
            document.getElementById('my-canvas').removeAttribute('height')
            document.getElementById('my-canvas').removeAttribute('width')
        }, 3000)
    } else {
        prevRecord.entries += prevRecord.entries+1;
    }
}

