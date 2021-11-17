// simple try-catch example
// try {
//   // reference error is caught, program can keep running
//   myFunction();
// } catch (err) {
//   // console.log('This is the error:', err);
//   // or just display the message
//   console.log(err.message);
//   //display the name of the error instead
//   console.log(err.name);
//   // test to see if the error is a reference error, returns true/false
//   console.log('Is it a reference error?', err instanceof ReferenceError);
//   //test to see if it's a type error:
//   console.log('Is it a type error?', err instanceof TypeError);
// }

// this line will run
// console.log('Program continues...');

// Below, the reference error is not caught, program will stop
// myFunction();

// this line won't run either
// console.log('something else...');

//example of finally, runs regardless of try/catch result
// try {
//   myFunction();
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log('This is the finally code block, which will always run...');
// }

// produce a type error, formatted with type and a template literal:
// try {
//   null.myFunction();
// } catch (err) {
//   console.log(`${err.name}: null!!`);
// }

// Try evaluations, runs whatever is in single quotes as code
// try {
//   console.log(eval('2+2'));
//   console.log(eval('"Hello World"'));

//   //this will cause a syntax error
//   console.log(eval('Hello World'));
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log('this should run also');
// }

//produce a URI error
// try {
//   decodeURIComponent('$%%');
// } catch (err) {
//   console.log(err);
// }

// console.log("didn't get stuck");

/*
 * catch my own custom error
 * use the throw keyword
 */

const user = { name: 'Julie', email: 'juloelker@gmail.com' };

try {
  if (!user.name) {
    // throw "User doesn't have a name";
    //same as a syntax error, includes
    //code filename and line number
    throw new SyntaxError("User doesn't have a name.");
  } else {
    console.log(`Username: ${user.name},
Email: ${user.email}`);
  }
} catch (error) {
  console.log(`User Error: ${error.message}`);
} finally {
  console.log('finally always runs');
}

console.log('program kept going');
