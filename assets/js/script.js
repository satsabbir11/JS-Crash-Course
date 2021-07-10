// //1.normal printing
// console.log('hello');

// //2.showing alert
// //alert('Warning!');

// //3.string in variable
// var s ='this is a string';
// console.log(s);

// //4.number in variable
// var num=45;
// console.log(num);

// //5.change inner html by it ID
// document.getElementById('text').innerHTML = 'Hello World';

// //6. taking input and store it html
// //var age = prompt('What is your age, man?');
// //document.getElementById('text').innerHTML = age;


// //increment decrement an add some value
// var n=40;
// n--;
// n+=10;
// n++;
// console.log(n);

// //divide by 10 then print its reminder by
// n/=10;
// console.log(n%3);



// //function string concatination

// function fun() {
// 	var name = 'sabbir';
// 	//name = prompt('what is your name?');
// 	var ans = 'Hello ' + name;
// 	document.getElementById('text').innerHTML = ans;
// }

// fun();


// //pass argument eon function
// function fun2(a,b)
// {
// 	console.log(a+b);
// }
// var a=56;
// var b=53;

// fun2(a,b);

// //pass two string
// function string(s1, s2)
// {
// 	var con=s1+' '+s2;
// 	console.log(con);

// }

// string('sabbir','ahmed');


// //a b input with prompt
// function fun(a,b)
// {
//     var res=a+b;
//     console.log(res);
// }


// var a;
// var b;
// // a=prompt('a');
// // b=prompt('b');
// fun(a,b);



// //loops

// var i=0;

// while(i<=5)
// {
// 	console.log(i);
// 	i++;
// }

// for(let i=0;i<=5;i++)
// {
// 	console.log(i);
// }

// let inf={
// 	first: 'sabbir',
// 	last: 'ahmed',
// 	full: function(){
// 		return inf.first + '\n' + inf.last;
// 	}
// };
// console.log(inf.full());

// let students = `[
// 	{
// 		"name":"sabbir",
// 		"age":20,
// 		"height":170
// 	},
// 	{
// 		"name":"ahmed",
// 		"age":25,
// 		"height":160
// 	}
// ]`

// console.log(JSON.parse(students)[1].age);

function catgen(){
	image = document.createElement('img');
	image.setAttribute('id','haha');
	image.src="https://cdn2.thecatapi.com/images/db9.gif";
        div=document.getElementById('cat');
        div.appendChild(image);
}

function rmv(){
	document.getElementById('haha').remove();
}

function fun_age1()
{
	var bb= prompt('what is your BirthYear?');
	var age = (2021-bb);
	var h1= document.createElement('h1');
	var text_node = document.createTextNode('Tomar boyosh '+ age + ' bosor');
	h1.setAttribute('id','hey');
	h1.appendChild(text_node);
	
	document.getElementById('text').appendChild(h1);
}
function fun_age2(){
	document.getElementById('hey').remove();
}















