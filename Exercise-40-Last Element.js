function lastElement(test){
    if (test.length === 0)
        return null;
    else
        return test[test.length - 1];
}
lastElement([3,5,7])
lastElement([1])
lastElement([])
