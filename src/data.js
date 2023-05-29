
// ------------------------------------ card


export function ordeningCp(data_) {
  data_.sort((a, b) => {
    if (a.stats["max-cp"] > b.stats["max-cp"]) {
      return -1;
    }
    if (parseInt(a.stats["max-cp"]) < parseInt(b.stats["max-cp"])) {
      return 1;
    }
    return 0;
  });
  return data_;
}

export function ordeningNum(data_) {
  data_.sort((a, b) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });
  return data_;
}



export function filteringName(data_, val) {
  data_ = data_.filter(el=>{
    if(el.name.includes(val.toLowerCase())){
      return el;
    }
  })
  return data_
}



export function filteringType(data_, val) {
  return data_.filter( el => el.type.includes(val) ? el : null )
}




//cálculo
export function calculation(attack, defense) {
  // console.log(typeof calculation)
  return attack - defense;
}
