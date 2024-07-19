const shoppingCart = [
    { id:"1", name: "Apple ", price: 10, quantity: 4 },
    { id:"2", name: "Banana ", price: 5, quantity: 5 },
    { id:"3", name: "Orange ", price: 15, quantity: 3 },
    { id:"4", name: "pineapple ", price: 20, quantity: 1 },
];

function check(param1, param2) {
    return param1.name === param2;
  }

    function totalAmountFruit(fruitName) {
        
        return new Promise((resolve, reject) => {
            // console.log(fruitName+" test")
               const user123 = shoppingCart.find(({ name }) => name === fruitName);                
                if (user123) {
                    console.log(user123)
                    resolve(user123);
                } else {
                    reject(new Error('User not found'));
                }
        });
    }

    function totalAmountFruit(fruitName) {
  return new Promise((resolve, reject) => {
    const user123 = shoppingCart.find(({ name }) => name === fruitName);

    if (user123) {
      console.log(user123);
      resolve(user123);
    } else {
      reject(new Error('User not found'));
    }
  });
}

    function promptFruitname()
    {
        console.log("Enter fruit name:")
        return new Promise((resolve)=>{
            process.stdin.once('data',(data)=>
            {console.log('fruit'+data)
                const fruitName = data.toString().trim();
                console.log(fruitName)
                resolve(fruitName);
        });
          })
    }
            async function main()
            {
                try{
                    const fruitName=await promptFruitname();
                    console.log(fruitName)
                    const fruit=await totalAmountFruit(fruitName);
                    console.log('fruit data fetched:', fruit);
                }
                catch (err) {
                    console.error('Error:', err.message);
                }

            }
            main();


        
