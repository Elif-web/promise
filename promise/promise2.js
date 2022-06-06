let num = 4
let num2 = 16

const myPromise = new Promise((resolve, reject) => {
  if (num2 / num == 4) {
    const result = 'It worked'
    resolve(result)
  } else {
    const res = 'Not working'
    reject(res)
  }
})

const checkIfItsDivided = () => {
  myPromise
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDivided()