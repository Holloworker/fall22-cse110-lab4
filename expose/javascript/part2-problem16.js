let statistics={
    re: 21,
    bl: 45,
    gr: 12,
    ra: 5,
    b: 40
}
for (let key in statistics){
    if(key[0] == 'r' || statistics[key]%2 == 1){
        console.log(statistics[key]);
    }
}
