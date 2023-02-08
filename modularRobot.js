// roads module
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];
    
    // buildGraph module
    function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
    if (graph[from] == null) {
    graph[from] = [to];
    } else {
    graph[from].push(to);
    }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
    }
    return graph;
    }
    
    // roadGraph module
    const roadGraph = buildGraph(roads);
    
    // VillageState module
    class VillageState {
    constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
    }
    
    move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
    return this;
    } else {
    let parcels = this.parcels.map(p => {
    if (p.place != this.place) return p;
    return {place: destination, address: p.address};
    }).filter(p => p.place != p.address);
    return new VillageState(destination, parcels);
    }
    }
    }
    
    // randomPick module
    function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
    }
    
    // randomRobot module
    function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
    }
    
    // mailRoute module
    const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
    ];
    
    // routeRobot module
    function routeRobot(state, memory) {
    if (memory.length == 0) {
    memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
    }
    
    // findRoute module
    function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
    if (place == to) return route.con
    }
    }
}

// goalOrientedRobot module
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
    route = findRoute(roadGraph, place, parcel.place);
    } else {
    route = findRoute(roadGraph, place, parcel.address);
    }
    }
    return {direction: route[0], memory: route.slice(1)};
    }