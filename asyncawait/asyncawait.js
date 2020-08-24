function hello() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Hello!I am');
      }, 2000);
    });
  }
  function user_name() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('vaishnavi');
      }, 2000);
    });
  }
   
  function user_city() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('from kopargaon.');
      }, 1000);
    });
  }
   
  async function async_msg() {
      try{
            console.log('I am in async method')
            const [hello_msg, name, city] = await Promise.all([hello(), user_name(), user_city()]);
   
            console.log(`${ hello_msg } ${ name } ${ city }`);
      }
      catch(err) {
        console.log('Error:', err.message);
      }
  }
  async_msg();