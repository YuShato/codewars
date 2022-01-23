function moveTen(s){
    const str='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    const arr=s.split('').map(v=>v=str.indexOf(v)+10)
    return arr.map(v=>v=str[v]).join('')
 }