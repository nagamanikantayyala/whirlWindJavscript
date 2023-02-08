const storage = {
    bigOak: { scalpel: "Butcher Shop" }
};

function anyStorage(nest, source, name) {
    return new Promise((resolve, reject) => {
        if (storage[nest.name] && storage[nest.name][name]) {
            resolve(storage[nest.name][name]);
        } else {
            reject(new Error(`Data not found: ${name}`));
        }
    });
}




const bigOak = { name: "bigOak" };

async function locateScalpel(nest) {
    let current = nest.name;
    for (; ;) {
        try {
            let next = await anyStorage(nest, current, "scalpel");
            if (next == current) return current;
            current = next;
        } catch (error) {
            throw new Error(`Error in retrieving data: ${error.message}`);
        }
    }
}

function locateScalpel2(nest) {
    return new Promise((resolve, reject) => {
        let current = nest.name;
        for (; ;) {
            anyStorage(nest, current, "scalpel")
                .then(next => {
                    if (next == current) resolve(current);
                    current = next;
                })
                .catch(error => {
                    reject(new Error(`Error in retrieving data: ${error.message}`));
                });
        }
    });
}

locateScalpel(bigOak).then(console.log);