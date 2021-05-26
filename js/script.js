window.onload = function () {

    var list = document.getElementById("shuffleAndSort"),
        button = document.getElementById("shuffle");
    function shuffle(items) {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while (--i) {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes() {

        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }
    function sort(items) {

        var cached = items.slice(0);
        cached.sort(function (a, b) {
            return a.innerText - b.innerText;
        });
        return cached;
    }
    function sortNodes() {
        
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = sort(nodes);
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            ++i;
        }
    }
    document.getElementById("sort").onclick = sortNodes;
    document.getElementById("shuffle").onclick = shuffleNodes;
}