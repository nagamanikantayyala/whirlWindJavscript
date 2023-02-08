    
 const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
let locked = box.locked;
if (!locked) {
return body();
}
box.unlock();
try {
return body();
} finally {
box.lock();
}
}
function withBoxUnlocked(body) {
let locked = box.locked;
if (!locked) {
return body();
}
box.unlock();
try {
return body();
} catch (e) {
console.log("Error raised: " + e);
} finally {
box.lock();
}
}
console.log(box.locked);