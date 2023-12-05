function changeCollectionObject(obj, itemsName) {
    let localStorageData = JSON.parse(localStorage.getItem(itemsName)) || [];
    let index = localStorageData.findIndex(item => item.id === obj.id);

    if (index !== -1) {
        localStorageData.splice(index, 1);
    } else {
        localStorageData.push(obj);
    }

    localStorage.setItem(itemsName, JSON.stringify(localStorageData));

    return index === -1;
}

function getIsInCollection(id, itemsName) {
    let localStorageData = JSON.parse(localStorage.getItem(itemsName)) || [];
    let index = localStorageData.findIndex(item => item.id === id);
    return index !== -1;
}

function getObjectsFromCollections(itemsName) {
    return JSON.parse(localStorage.getItem(itemsName)) || [];
}

export { changeCollectionObject, getIsInCollection, getObjectsFromCollections };
