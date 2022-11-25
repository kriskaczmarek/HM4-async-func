// function return2Methods() {
// 	let myTimeout
// 	function logWithTimeout(message, time) {
// 		myTimeout = setTimeout(() => console.log(message), time)
// 	}
// 	function cancelLog() {
// 		clearTimeout(myTimeout)
// 	}

// return {
// 	logWithTimeout,
// 	cancelLog,
// }
// const obj = return2Methods()

// return2Methods.logWithTimeout("Hello", 1000)
// return2Methods.clearTimeout()
//##############################
// function stoper() {
// 	let interval
// 	let number = 1
// 	function start() {
// 		interval = setInterval(() => {
// 			console.log(number)
// 			number++
// 		}, 1000)
// 	}
// 	function stop() {
// 		clearInterval(interval)
// 	}
// 	function pause() {
// 		number = 1
// 		clearInterval(interval)
// 	}
// 	return {
// 		start,
// 		stop,
// 		pause,
// 	}
// }
// const stopwatch = stoper()
// stopwatch.start()
// setTimeout(stopwatch.pause, 5000)
// setTimeout(stopwatch.start, 6000)
// setTimeout(stopwatch.stop, 8000)
// setTimeout(stopwatch.start, 5000)
//####################################

// const url = require("inspector")
// const fetch = require("node-fetch")
// const URL = "https://js-pb.herokuapp.com/v2/user/"
// const ID = 5

// fetch(`${URL}${ID}`)
// 	.then(response => {
// 		if (response.ok === false) {
// 			throw new Error("Network error: " + response.status)
// 		} else {
// 			return response.json()
// 		}
// 	})
// 	.then(user=>console.log(user.role))
// 	.catch(err=>console.log(err))

//#######################################################################################
//const a = setTimeout(()=>{console.log("Hello")},2000)
// function getTimeLogger() {
// 	let timeout
// 	function setTimeLog(message, time) {
// 		timeout = setTimeout(() => console.log(message), time)
// 	}
// 	function cancelTimeLog() {
// 		if (timeout) {
// 			clearTimeout(timeout)
// 		}
// 	}
// 	return {
// 		setTimeLog,
// 		cancelTimeLog,
// 	}
// }
//getTimeLogger().setTimeLog("Hello",1000)

// let num = 0
// function counter() {
// 	console.log(++num)
// }
// const interval = setInterval(function () {
// 	counter()
// 	if (num === 5) {
// 		clearInterval(interval)
// 	}
// }, 500)

// function getTimeLogged() {
// 	let timeout
// 	function setTimeLog(message, time) {
// 		timeout = setTimeout(() => console.log(message), time)
// 	}
// 	function cancelTimeLog() {
// 		if (timeout) {
// 			clearTimeout(timeout)
// 		}
// 	}
// 	return {
// 		setTimeLog,
// 		cancelTimeLog,
// 	}
// }
// getTimeLogged().setTimeLog("Hello", 2000)
//-----------------------STOPER--------------------------
function clock() {
	let sec = 0
	let interval
	function displayTime() {
		sec++
		console.log(sec)
	}
	function start() {
		interval = setInterval(displayTime, 1000)
	}
	function stop() {
		if (interval) {
			clearInterval(interval)
		}
	}
	return {
		start,
		stop,
	}
}
// const swatch = clock()
// swatch.start()
// setTimeout(swatch.stop, 10000)
//------------------------------------------------------

const fetch = require("node-fetch")

// function displayData(data) {
// 	console.log(data)
// }
// function sayHi() {
// 	console.log("SAY Hi")
// }
// function block() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i + " for loop")
// 	}
// }
// function displayData(data){
// 	console.log(data);
// }
// const name = 1
// const futureData = fetch(`https://js-pb.herokuapp.com/v1/name/${name}`)
// futureData.then(displayData)
// console.log("I'm still first");

const n = 1
function displayData(data) {
	console.log(data)
}
function sayHi() {
	console.log("Say HI!")
}
function block() {
	for (let i = 0; i < 100; i++) {
		console.log("Blocker" + i)
	}
}
//functions
// setTimeout(sayHi, 1000)
// const futureData = fetch(`https://js-pb.herokuapp.com/v1/name/${n}`)
// futureData.then(displayData)
// block()
// console.log("I'm still first")
// let num = 0
// function add() {
// 	num++
// 	return num
// }
// setTimeout(() => {
// 	console.log(`little break in sec. ${add()}`)
// }, 5000)
// interval = setInterval(() => {
// 	console.log(`interval no. ${add()}`)
// }, 1000)
// setTimeout(() => {
// 	clearInterval(interval)
// }, 10000)

// function display(data) {
// 	console.log(data)
// }
// const gold = fetch("http://api.nbp.pl/api/cenyzlota/last/10?format=JSON")
// display(gold)
// const goldPromise = gold.then(res => res.json())
// console.log(goldPromise)
// const goldPromise2 = goldPromise.then(data=>{console.log(data[0])})
// gold.catch(err => {
// 	console.log("error", err)
// })
// function random(min, max, cb) {
// 	const number = Math.floor(Math.random() * (max - min + 1) + min)
// 	cb(number)
// }
// //random(10,20,(x)=>{console.log(`ta liczba to ${x}`)})
// function ax(s){
// 	console.log(s)
// }
// random(10,20,ax)

// console.log("one")
// setTimeout(function timeout() {
// 	console.log("Timed out!")
// }, 0)
// console.log("two")
// Promise.resolve(1).then(function resolve() {
// 	console.log("Resolved!")
// })
// console.log("three")

// const shouldBeResolved = true
// const myPromise = new Promise((resolve, reject) => {
// 	if (shouldBeResolved) {
// 		resolve("OK")
// 	} else {
// 		reject("Failed")
// 	}
// })
// myPromise.then(result => console.log(result)).catch(err => console.log(error))

// const dog = fetch("https://dog.ceo/api/breeds/image/random")
// 	.then(res => res.json())
// 	.then(data => console.log(data.message))
// console.log(dog)

// const getUser = []
// const userId = [1,2,3,4,5]

// userId.forEach(id=>{
// 	const userPromise = new Promise((resolve,reject)=>{

// 	})
// })

// const people = fetch("https://ghibliapi.herokuapp.com/people")
// people
// 	.then(res => res.json())
// 	.then(obj => {
// 		const names = obj
// 			.map(el => {
// 				return el.name
// 			})
// 			.join("\n")
// 		console.log(names)
// 	})
// const getUserPromises = []
// const usersId = [1,2,3]
// usersId.forEach(el=>{
// 	const name = fetch('https://js-pb.herokuapp.com/v1/name/'+el)
// 	getUserPromises.push(name)
// })
// Promise.all(getUserPromises).then(res=>console.log(res))
// Promise.race(getUserPromises).then(res=>console.log(res))

// const userNameTable = []
// const userId = [1, 2, 3]
// userId.forEach(el => {
// 	const userPromise = fetch(`https://js-pb.herokuapp.com/v1/name/${el}`)
// 	userNameTable.push(userPromise)
// })
// Promise.all(userNameTable).then(res => console.log(res))

const URL = "https://js-pb.herokuapp.com/v1/user/"
// function getName(id) {
// 	return fetch(`${URL}${id}`)
// 		.then(res => res.json())
// 		.then(el => console.log(el))
// 		.catch(err => console.log("error"))
// }
// getName(2)
// function getUser(id){
// 	return fetch(`${URL}${id}`).then(res=>{
// 		if(res.ok===false){
// 			throw new Error(`Erros status: ${res.status}`)
// 		}
// 		return res.json()
// 	})
// }
// getUser(3).then(el=>console.log(el)).catch(e=>console.log(e))

function getUsersId(id) {
	return fetch(`${URL}${id}`).then(res => {
		if (res.ok === false) {
			throw new Error(`Error type: ${res.status}`)
		}
		return res.json()
	})
}
function loopOverUsers(users) {
	const userPromise = users.map(el => getUsersId(el))
	return Promise.all(userPromise)
}
const users = [1, 2, 3, 4, 5, 6, 7, 8, 9]
loopOverUsers(users).then(user => user.forEach(el => console.log(el)))
