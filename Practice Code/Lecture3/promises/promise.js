console.log('Start');

let itemSet = () => {
	let itemCount = 1;

	let items = [{
			id: itemCount++,
			item: 'Sword of Truth'
		},
		{
			id: itemCount++,
			item: 'Book of Wisdom'
		},
		{
			id: itemCount++,
			item: 'Potion of Healing'
		}
	];
	/*So what is a Promise means: If teacher said:I promise we will be happy with the final grade, in regardless of anythings we have done,And he
	will fulfill his promise by giving the Grade A to us,If he dont fulfill his promies, we still will getting the result,but we want to reject it.

	/*So Promise is the Object in javascript which some value will come at some specific point or may not come and some error will come*/

	return {
		addItem: (item) => {
			return new Promise((fulfill, reject) => {
				if (!item) reject('You did not provide an item');

				fulfill(items.push({
					id: itemCount++,
					item: item
				}));
			});
		},
		/* when we run this function,we will basically recieve two method which will bring back two promise,the first will add a new item to the 
    function and second function will take 750 second(just preventing it will call the data base )
    */
		getItem: () => {
			return new Promise((fulfill, reject) => {
				setTimeout(() => {
					if (items.length > 0) fulfill(items.shift()); //items.shift() 表示remove first item from the array and return it.
					reject('No items left!');
				}, 600);
			});
		}
	};
};


/* // 这个写法是没有用的，只有getItem后马上then,才能输出getItem 的东西，否则只会是 Promise{<pending>}
let firstItemSet = itemSet();
let firstChain = firstItemSet.getItem();
firstChain.then((firstItem) => {
	console.log("You got a new item!");
	console.log(firstItem);
	return firstItemSet.getItem();
}).then((sencondItem) => {
	console.log("You got a second item!");
	console.log(sencondItem);
	return firstItemSet.getItem();
}).then((lastItemReceive) => {
	console.log("the last item received was:");
	console.log(lastItemReceive);
});
console.log(firstChain); */

/* function .then, is a properity/function of the promise, it takes at least one call back,the first call back is what to do if 
the promise is fulfill,the second will be catching a error in case the promise won't fulfill 

/*
//处理出错的程序
let firstItemSet = itemSet();
let firstChain = firstItemSet.getItem();
firstChain.then((firstItem) => {
	console.log("You got a new item!");
	console.log(firstItem);
	// return firstItemSet.getItem();
	throw "No,this is Bad,we can't keep getting items or we will run out";
}).then((sencondItem) => {
	console.log("You got a second item!");
	console.log(sencondItem);
	return sencondItem;
}).then((lastItemReceive) => {
	console.log("the last item received was:");
	console.log(lastItemReceive);
}).catch((error) => {
	console.error("an error occur");
	console.error(error);
	return "We have survied the error and continue"; // pass the error
}).then((message) => {
	console.log(message);
});
console.log(firstChain);

Output:
start:
Promise { <pending> }
You got a new item!
{ id: 1, item: 'Sword of Truth' }
an error occur
No,this is Bad,we can't keep getting items or we will run out
就是catch会反回到getFirstItem那里，调用那句话
after .then((message) => ......)
We have survied the error and continue
*/


//accumulating result
let firstItemSet = itemSet();
//看以下，像不像一个链条
//按以往的写法都是let firstChain = firstItemSet.getItem().then((firstItem) =>{}).then((secondItem) =>{}).then((thirdItem) => {}); 
//因为getItem 返回的是一个 Promise 的方法，所以他得到的东西可以用then( 干什么 function )
//然后，then里面的function参数是获得的他之前的Promise所fulfill的内容(e.g:这里是fulfill(item.shift));

let firstChain = firstItemSet.getItem().then(function(firstItem) {
	console.log('You got a new item!');
	console.log(firstItem);
	return firstItemSet.getItem().then((secondItem) => {
		console.log('You got a new item!');
		console.log(secondItem);
		return firstItemSet.getItem().then((thirdItem) => {
			console.log('You got a new item!');
			console.log(thirdItem);
			return firstItemSet.getItem().then((fourthItem) => {
				return [firstItem, secondItem, thirdItem, fourthItem];
			}).catch(() => {
				console.log('There was no fourth item!');
				console.log(firstChain);
				return [firstItem, secondItem, thirdItem]; //没有这个，下面那个"all the items were" ==> "undefine";
			}); // recovers from error
		});
	});
}).then(
	(items) => {  //这个item 指的是
		console.log('all the items were:');
		console.log(items);
		return items;
	},
	(error) => {
		console.log('There was an error:');
		console.log(error);

		return [];
	}
	);
	// console.log("Value of firstChain");
	// console.log(firstChain);

let secondItemSet = itemSet();
let secondChain = firstChain.then(() => {
	console.log('\n\nStarting second chain');
	return secondItemSet.getItem().then((firstItem) => {
		return [firstItem];
	});
}).then((itemsSoFar) => {
	return secondItemSet.getItem().then((secondItem) => {
		return itemsSoFar.concat([secondItem]); // concat的作用：concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
		//var a = [1,2,3];  document.write(a.concat(4,5));  return [1,2,3,4,5]
	});
}).then((itemsSoFar) => {
	return secondItemSet.getItem().then((thirdItem) => {
		return itemsSoFar.concat([thirdItem]);
	});
}).then((items) => {
	console.log('all the items in chain 2 were:');
	console.log(items);

	return items;
});