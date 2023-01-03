class Node {
	constructor(value = null, nextNode = null) {
		this.value = value;
		this.nextNode = nextNode;
	}
}

class LinkedList {
	constructor(headNode) {
		this.HEAD = new Node(headNode);
	}
	append(value) {
		let newNode = new Node(value);
		// console.log(newNode.value);
		let temp = this.HEAD;
		while (temp.nextNode) {
			temp = temp.nextNode;
		}
		temp.nextNode = newNode;
		// console.log(temp);
	}
	prepend(value) {
		let temp = this.HEAD.nextNode;
		let newNode = new Node(value);
		this.HEAD.nextNode = newNode;
		newNode.nextNode = temp;
	}
	size() {
		let listSize = 1;
		let temp = this.HEAD;
		if (!this.HEAD) {
			return 0;
		}
		while (temp.nextNode) {
			listSize++;

			temp = temp.nextNode;
		}
		return listSize;
	}
	head() {
		return this.HEAD;
	}
	tail() {
		let temp = this.HEAD;
		while (temp.nextNode) {
			temp = temp.nextNode;
		}
		return temp;
	}
	at(index) {
		if (!this.HEAD) {
			return "No linked list";
		}
		let temp = this.HEAD;
		for (let i = 1; i <= index; i++) {
			temp = temp.nextNode;
		}
		return temp;
	}
	pop() {
		let temp = this.HEAD;
		let lastSecondNode = null;
		while (temp.nextNode) {
			lastSecondNode = temp;
			temp = temp.nextNode;
		}
		lastSecondNode.nextNode = null;
	}
	contains(value) {
		let temp = this.HEAD;
		while (temp.nextNode) {
			// console.log(temp.value);
			if (temp.value === value) {
				return true;
			}
			temp = temp.nextNode;
		}
		if (temp.value === value) {
			return true;
		}
		return false;
	}

	find(value) {
		let temp = this.HEAD;
		let index = 0;
		while (temp.nextNode) {
			// console.log(temp.value);
			if (temp.value === value) {
				return index;
			}
			temp = temp.nextNode;
			index++;
		}
		return "Can not find the value in the list";
	}
	toString() {
		let temp = this.HEAD;
		let valuesInString = "";
		while (temp.nextNode) {
			temp = temp.nextNode;
			valuesInString += ` (${temp.value}) ->`;
		}
		console.log(valuesInString);
	}
}

let list = new LinkedList();
list.append(2);
list.append(3);
list.append(5);
list.prepend(11);
list.prepend(31);
console.log(list);
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(3));
// console.log(list.at(4));
// list.pop();
// console.log(list);
console.log(list.contains(5));
console.log(list.contains(9));
console.log(list.find(9));
console.log(list.find(9));
console.log(list.toString());
