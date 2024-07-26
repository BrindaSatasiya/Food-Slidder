var htmlCollection = document.getElementsByClassName('item');

var itemsId = Array.from(htmlCollection);

var sectionDeg = 360 / itemsId.length;

var radianSectionDeg = sectionDeg * Math.PI * 2 / 360;

var radiusLength = 160;

for (var i = 0; i < itemsId.length; i++) {
    itemsId[i].style.top = radiusLength * Math.sin(radianSectionDeg * i - 1.5708) + 'px';
    itemsId[i].style.left = radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
}

function makeATurn() {
    for (var i = 0; i < itemsId.length; i++) {
        itemsId[i].style.top = radiusLength * Math.sin(radianSectionDeg * i - 1.5708) + 'px';
        itemsId[i].style.left = radiusLength * Math.cos(radianSectionDeg * i - 1.5708) + 'px';
    }
}

function turnRight() {
    var holder = itemsId.pop();
    itemsId.unshift(holder);
    makeATurn();
}

function turnLeft() {
    var holder = itemsId.shift();
    itemsId.push(holder);
    makeATurn();
}







