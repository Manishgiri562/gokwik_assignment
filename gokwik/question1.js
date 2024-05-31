var nestedObject = {
	data: {
		info: {
			stuff: {
				hello: 'sdfsf',
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: 'foo2',
                        		is: true,
					},
				},
			},
		},
	},
};

const contains = (searchString, searchValue) => {
    // if either of searchString or searchValue isn't defined returning false
	if (!searchString || searchValue == undefined)  {
		return false;
	}

    // assuming that search value will not be found
	let stringFound = false;
	for (let key in searchString) {
		if (typeof searchString[key] === 'object') { // if search value is an object recursively call the contain method
			stringFound = stringFound || contains(searchString[key], searchValue);
		} else if (searchString[key] === searchValue) {
			stringFound = true;
		}

		if (stringFound) { // searchValue found return true
			return true;
		}
	}

	return false; //value not found in the object
};